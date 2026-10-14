// Client-side document scanning helpers: turn a camera frame into a clean,
// white-background page and bundle pages into a PDF (no external libraries).

export const PAGE_ASPECT = 8.5 / 11; // US Letter, width / height
const MAX_OUTPUT_HEIGHT = 2200; // ~200 DPI for a letter page
const BLOCK_SIZE = 16; // Size of the tiles used to estimate paper brightness

// Estimates the brightness of the bare paper across the page. Text is darker
// than paper, so a high percentile per tile ignores the ink and captures the
// lighting (including shadows), which we then divide out.
const estimateBackground = (gray, width, height) => {
  const bw = Math.ceil(width / BLOCK_SIZE);
  const bh = Math.ceil(height / BLOCK_SIZE);
  const blocks = new Float32Array(bw * bh);
  const hist = new Uint32Array(256);

  for (let by = 0; by < bh; by++) {
    for (let bx = 0; bx < bw; bx++) {
      hist.fill(0);
      const x0 = bx * BLOCK_SIZE;
      const y0 = by * BLOCK_SIZE;
      const x1 = Math.min(x0 + BLOCK_SIZE, width);
      const y1 = Math.min(y0 + BLOCK_SIZE, height);
      let count = 0;
      for (let y = y0; y < y1; y++) {
        for (let x = x0; x < x1; x++) {
          hist[gray[y * width + x]]++;
          count++;
        }
      }
      // 90th percentile of the tile
      let target = count * 0.9;
      let value = 255;
      for (let v = 0; v < 256; v++) {
        target -= hist[v];
        if (target <= 0) {
          value = v;
          break;
        }
      }
      blocks[by * bw + bx] = value;
    }
  }

  // Dilate (max filter) so tiles covered mostly by ink pick up nearby paper
  const dilated = new Float32Array(bw * bh);
  const r = 2;
  for (let y = 0; y < bh; y++) {
    for (let x = 0; x < bw; x++) {
      let max = 0;
      for (let dy = -r; dy <= r; dy++) {
        const yy = Math.min(bh - 1, Math.max(0, y + dy));
        for (let dx = -r; dx <= r; dx++) {
          const xx = Math.min(bw - 1, Math.max(0, x + dx));
          if (blocks[yy * bw + xx] > max) max = blocks[yy * bw + xx];
        }
      }
      dilated[y * bw + x] = max;
    }
  }

  // Box blur for smooth lighting transitions
  const smooth = new Float32Array(bw * bh);
  for (let y = 0; y < bh; y++) {
    for (let x = 0; x < bw; x++) {
      let sum = 0;
      let n = 0;
      for (let dy = -r; dy <= r; dy++) {
        const yy = y + dy;
        if (yy < 0 || yy >= bh) continue;
        for (let dx = -r; dx <= r; dx++) {
          const xx = x + dx;
          if (xx < 0 || xx >= bw) continue;
          sum += dilated[yy * bw + xx];
          n++;
        }
      }
      smooth[y * bw + x] = Math.max(sum / n, 1);
    }
  }

  return { values: smooth, bw, bh };
};

// If the page didn't fill the guide, the table/background around it comes out
// dark. Flood-fill any non-white area touching the image edge and paint it white.
// Text has a margin from the paper's edge, so it isn't connected to the border.
const clearBorderBackground = (gray, width, height) => {
  const THRESHOLD = 200;
  const visited = new Uint8Array(width * height);
  const stack = new Int32Array(width * height);
  let top = 0;

  const seed = (i) => {
    if (!visited[i] && gray[i] < THRESHOLD) {
      visited[i] = 1;
      stack[top++] = i;
    }
  };

  for (let x = 0; x < width; x++) {
    seed(x);
    seed((height - 1) * width + x);
  }
  for (let y = 0; y < height; y++) {
    seed(y * width);
    seed(y * width + width - 1);
  }

  while (top > 0) {
    const i = stack[--top];
    gray[i] = 255;
    const x = i % width;
    if (x > 0) seed(i - 1);
    if (x < width - 1) seed(i + 1);
    if (i >= width) seed(i - width);
    if (i < (height - 1) * width) seed(i + width);
  }
};

// Crops the given region of a source (video, image, or canvas) and returns a
// canvas with shadows removed, the paper pure white, and the text darkened.
export const enhanceDocument = (source, sx, sy, sw, sh) => {
  const height = Math.round(Math.min(MAX_OUTPUT_HEIGHT, sh));
  const width = Math.round(height * (sw / sh));

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(source, sx, sy, sw, sh, 0, 0, width, height);

  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;
  const pixelCount = width * height;

  const gray = new Uint8ClampedArray(pixelCount);
  for (let i = 0, p = 0; i < pixelCount; i++, p += 4) {
    gray[i] = 0.299 * data[p] + 0.587 * data[p + 1] + 0.114 * data[p + 2];
  }

  const { values: bg, bw, bh } = estimateBackground(gray, width, height);

  // Anything brighter than WHITE_POINT of the local paper brightness becomes
  // pure white; anything darker than BLACK_POINT becomes pure black.
  const WHITE_POINT = 0.85;
  const BLACK_POINT = 0.35;
  const range = WHITE_POINT - BLACK_POINT;

  for (let y = 0; y < height; y++) {
    // Bilinear sample of the background grid (tile centers)
    const gy = Math.min(bh - 1, Math.max(0, (y + 0.5) / BLOCK_SIZE - 0.5));
    const y0 = Math.floor(gy);
    const y1 = Math.min(bh - 1, y0 + 1);
    const fy = gy - y0;

    for (let x = 0; x < width; x++) {
      const gx = Math.min(bw - 1, Math.max(0, (x + 0.5) / BLOCK_SIZE - 0.5));
      const x0 = Math.floor(gx);
      const x1 = Math.min(bw - 1, x0 + 1);
      const fx = gx - x0;

      const top = bg[y0 * bw + x0] * (1 - fx) + bg[y0 * bw + x1] * fx;
      const bottom = bg[y1 * bw + x0] * (1 - fx) + bg[y1 * bw + x1] * fx;
      const paper = top * (1 - fy) + bottom * fy;

      const i = y * width + x;
      let t = (gray[i] / paper - BLACK_POINT) / range;
      t = t <= 0 ? 0 : t >= 1 ? 1 : Math.pow(t, 1.5); // Gamma keeps text crisp and dark
      const v = t * 255;

      gray[i] = v;
    }
  }

  clearBorderBackground(gray, width, height);

  for (let i = 0, p = 0; i < pixelCount; i++, p += 4) {
    data[p] = gray[i];
    data[p + 1] = gray[i];
    data[p + 2] = gray[i];
    data[p + 3] = 255;
  }

  ctx.putImageData(imageData, 0, 0);
  return canvas;
};

const canvasToJpegBytes = async (canvas, quality = 0.8) => {
  const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/jpeg', quality));
  if (!blob) throw new Error('Could not encode page image');
  return new Uint8Array(await blob.arrayBuffer());
};

// Builds a PDF with one page per canvas. Each page is US Letter width and
// its height follows the image's aspect ratio, so nothing is stretched.
export const buildPdf = async (canvases) => {
  const encoder = new TextEncoder();
  const chunks = [];
  const offsets = [];
  let length = 0;

  const push = (part) => {
    const bytes = typeof part === 'string' ? encoder.encode(part) : part;
    chunks.push(bytes);
    length += bytes.length;
  };
  const startObject = (id) => {
    offsets[id] = length;
    push(`${id} 0 obj\n`);
  };

  // Object layout: 1 = catalog, 2 = page tree, then 3 per page (page, content, image)
  const pageIds = canvases.map((_, i) => 3 + i * 3);
  const totalObjects = 2 + canvases.length * 3;

  push('%PDF-1.4\n');
  push(new Uint8Array([0x25, 0xe2, 0xe3, 0xcf, 0xd3, 0x0a])); // Binary marker comment

  startObject(1);
  push('<< /Type /Catalog /Pages 2 0 R >>\nendobj\n');

  startObject(2);
  push(`<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(' ')}] /Count ${canvases.length} >>\nendobj\n`);

  for (let i = 0; i < canvases.length; i++) {
    const canvas = canvases[i];
    const pageId = pageIds[i];
    const contentId = pageId + 1;
    const imageId = pageId + 2;

    const pageWidth = 612;
    const pageHeight = Math.round((pageWidth * canvas.height) / canvas.width * 100) / 100;
    const jpeg = await canvasToJpegBytes(canvas);
    const content = `q ${pageWidth} 0 0 ${pageHeight} 0 0 cm /Im0 Do Q`;

    startObject(pageId);
    push(
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] ` +
        `/Resources << /XObject << /Im0 ${imageId} 0 R >> >> /Contents ${contentId} 0 R >>\nendobj\n`
    );

    startObject(contentId);
    push(`<< /Length ${content.length} >>\nstream\n${content}\nendstream\nendobj\n`);

    startObject(imageId);
    push(
      `<< /Type /XObject /Subtype /Image /Width ${canvas.width} /Height ${canvas.height} ` +
        `/ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpeg.length} >>\nstream\n`
    );
    push(jpeg);
    push('\nendstream\nendobj\n');
  }

  const xrefStart = length;
  let xref = `xref\n0 ${totalObjects + 1}\n0000000000 65535 f \n`;
  for (let id = 1; id <= totalObjects; id++) {
    xref += `${String(offsets[id]).padStart(10, '0')} 00000 n \n`;
  }
  push(xref);
  push(`trailer\n<< /Size ${totalObjects + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`);

  return new Blob(chunks, { type: 'application/pdf' });
};
