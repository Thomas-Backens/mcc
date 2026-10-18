'use client';

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './index.module.css';
import { ZoomIn, ZoomOut } from 'lucide-react';

const MAX_ZOOM = 5;
const MIN_ZOOM_FLOOR = 0.2;
const PADDING = 12; // Space around the pages, in px
const PAGE_GAP = 12;
const MAX_RENDER_WIDTH = 2000; // Pixel width PDF pages are rendered at (stays sharp when zoomed in)

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

// Loads pdf.js only when a PDF is opened, and renders each page to an image.
const renderPdfPages = async (url, isCancelled) => {
  const pdfjs = await import('pdfjs-dist/legacy/build/pdf.min.mjs');
  pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/legacy/build/pdf.worker.min.mjs', import.meta.url).toString();

  const pdf = await pdfjs.getDocument(url).promise;
  const pages = [];

  for (let n = 1; n <= pdf.numPages; n++) {
    if (isCancelled()) break;
    const page = await pdf.getPage(n);
    const base = page.getViewport({ scale: 1 });
    const viewport = page.getViewport({ scale: MAX_RENDER_WIDTH / base.width });

    const canvas = document.createElement('canvas');
    canvas.width = Math.round(viewport.width);
    canvas.height = Math.round(viewport.height);
    await page.render({ canvas, canvasContext: canvas.getContext('2d'), viewport }).promise;

    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/jpeg', 0.9));
    pages.push({ src: URL.createObjectURL(blob), width: canvas.width, height: canvas.height });
  }

  pdf.destroy();
  return pages;
};

const loadImagePage = (url) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve([{ src: url, width: img.naturalWidth, height: img.naturalHeight }]);
    img.onerror = reject;
    img.src = url;
  });

// Shows lyrics (an image or every page of a PDF) fit to the screen width, with
// pinch / ctrl+scroll / button zoom. Zoom 1 = fit width; zooming out can go
// down to showing everything at once.
const LyricsViewer = ({ url, isPdf, title, fallback }) => {
  const scrollRef = useRef(null);
  const pinchRef = useRef(null);
  const zoomRef = useRef(1);
  const zoomToRef = useRef(null);
  const anchorRef = useRef(null);
  const [pages, setPages] = useState(null);
  const [failed, setFailed] = useState(false);
  const [size, setSize] = useState(null);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    let cancelled = false;
    let loaded = [];
    setPages(null);
    setFailed(false);
    setZoom(1);

    (isPdf ? renderPdfPages(url, () => cancelled) : loadImagePage(url))
      .then((result) => {
        loaded = result;
        if (!cancelled) setPages(result);
      })
      .catch((error) => {
        console.error('Error loading lyrics:', error);
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
      loaded.forEach((page) => page.src.startsWith('blob:') && URL.revokeObjectURL(page.src));
    };
  }, [url, isPdf]);

  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const update = () => setSize({ width: el.clientWidth, height: el.clientHeight });
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [pages, failed]);

  // Page width at zoom 1 fills the screen width
  const fitWidth = size ? size.width - PADDING * 2 : 0;
  const totalFitHeight = pages
    ? pages.reduce((sum, page) => sum + page.height * (fitWidth / page.width), 0) + PAGE_GAP * (pages.length - 1)
    : 0;
  // Smallest zoom shows every page at once
  const minZoom =
    size && totalFitHeight > 0
      ? clamp((size.height - PADDING * 2) / totalFitHeight, MIN_ZOOM_FLOOR, 1)
      : 1;

  // Change zoom while keeping the point under (clientX, clientY) in place
  const zoomTo = useCallback(
    (nextZoom, clientX, clientY) => {
      const el = scrollRef.current;
      if (!el) return;
      const clamped = clamp(nextZoom, minZoom, MAX_ZOOM);
      const rect = el.getBoundingClientRect();
      const x = (clientX ?? rect.left + rect.width / 2) - rect.left;
      const y = (clientY ?? rect.top + rect.height / 2) - rect.top;
      anchorRef.current = {
        x,
        y,
        contentX: (el.scrollLeft + x) / zoomRef.current,
        contentY: (el.scrollTop + y) / zoomRef.current,
        zoom: clamped,
      };
      setZoom(clamped);
    },
    [minZoom]
  );

  // Latest values for the long-lived touch listeners
  zoomRef.current = zoom;
  zoomToRef.current = zoomTo;

  // Apply the scroll position for the zoom anchor after the new size is laid out
  useLayoutEffect(() => {
    const el = scrollRef.current;
    const anchor = anchorRef.current;
    if (!el || !anchor || anchor.zoom !== zoom) return;
    el.scrollLeft = anchor.contentX * zoom - anchor.x;
    el.scrollTop = anchor.contentY * zoom - anchor.y;
    anchorRef.current = null;
  }, [zoom]);

  // Pinch to zoom; one finger still scrolls natively. Touch events (not pointer
  // events) keep firing while the browser scrolls, so a pinch is always seen.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const getPinch = (touches) => {
      const [a, b] = [touches[0], touches[1]];
      return {
        distance: Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY),
        x: (a.clientX + b.clientX) / 2,
        y: (a.clientY + b.clientY) / 2,
      };
    };

    const handleTouchStart = (e) => {
      if (e.touches.length === 2) pinchRef.current = { start: getPinch(e.touches), zoom: zoomRef.current };
    };
    const handleTouchMove = (e) => {
      if (e.touches.length !== 2 || !pinchRef.current) return;
      e.preventDefault(); // Stop the browser from zooming the whole page
      const current = getPinch(e.touches);
      zoomToRef.current(pinchRef.current.zoom * (current.distance / pinchRef.current.start.distance), current.x, current.y);
    };
    const handleTouchEnd = (e) => {
      if (e.touches.length < 2) pinchRef.current = null;
    };

    el.addEventListener('touchstart', handleTouchStart, { passive: true });
    el.addEventListener('touchmove', handleTouchMove, { passive: false });
    el.addEventListener('touchend', handleTouchEnd);
    el.addEventListener('touchcancel', handleTouchEnd);
    return () => {
      el.removeEventListener('touchstart', handleTouchStart);
      el.removeEventListener('touchmove', handleTouchMove);
      el.removeEventListener('touchend', handleTouchEnd);
      el.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, [pages]);

  // Ctrl/cmd + scroll wheel (and trackpad pinch) zooms on desktop
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleWheel = (e) => {
      if (!e.ctrlKey && !e.metaKey) return;
      e.preventDefault();
      zoomTo(zoom * Math.exp(-e.deltaY * 0.01), e.clientX, e.clientY);
    };
    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [zoom, zoomTo]);

  if (failed) return fallback;

  const contentWidth = fitWidth * zoom;

  return (
    <div className={styles.viewer}>
      <div ref={scrollRef} className={styles.scroll}>
        {!pages && (
          <div className={styles.loading}>
            <div className={styles.spinner}></div>
          </div>
        )}
        {pages && size && (
          <div className={styles.pages} style={{ width: contentWidth }}>
            {pages.map((page, i) => (
              <img
                key={page.src}
                src={page.src}
                alt={pages.length > 1 ? `${title} lyrics, page ${i + 1}` : `${title} lyrics`}
                draggable={false}
                style={{ width: contentWidth, height: page.height * (contentWidth / page.width) }}
              />
            ))}
          </div>
        )}
      </div>

      {pages && (
        <div className={styles.zoomControls}>
          <button onClick={() => zoomTo(zoom / 1.25)} disabled={zoom <= minZoom + 0.001} aria-label="Zoom out">
            <ZoomOut size={18} />
          </button>
          <button className={styles.zoomLevel} onClick={() => zoomTo(1)} aria-label="Fit to width">
            {zoom === 1 ? 'Fit' : `${Math.round(zoom * 100)}%`}
          </button>
          <button onClick={() => zoomTo(zoom * 1.25)} disabled={zoom >= MAX_ZOOM} aria-label="Zoom in">
            <ZoomIn size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

export default LyricsViewer;
