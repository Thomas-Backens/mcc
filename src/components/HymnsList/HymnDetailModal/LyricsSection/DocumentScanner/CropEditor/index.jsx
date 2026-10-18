'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import styles from './index.module.css';

const MIN_SIZE = 0.05; // Smallest crop, as a fraction of the image
const PADDING = 20; // Space around the image so edge handles stay grabbable

const HANDLES = ['n', 's', 'e', 'w', 'nw', 'ne', 'sw', 'se'];

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

// Applies a drag to the crop rect. All values are normalized 0-1.
const moveRect = (start, handle, dx, dy) => {
  if (handle === 'move') {
    return {
      ...start,
      x: clamp(start.x + dx, 0, 1 - start.width),
      y: clamp(start.y + dy, 0, 1 - start.height),
    };
  }

  let left = start.x;
  let top = start.y;
  let right = start.x + start.width;
  let bottom = start.y + start.height;

  if (handle.includes('w')) left = clamp(left + dx, 0, right - MIN_SIZE);
  if (handle.includes('e')) right = clamp(right + dx, left + MIN_SIZE, 1);
  if (handle.includes('n')) top = clamp(top + dy, 0, bottom - MIN_SIZE);
  if (handle.includes('s')) bottom = clamp(bottom + dy, top + MIN_SIZE, 1);

  return { x: left, y: top, width: right - left, height: bottom - top };
};

const CropEditor = ({ src, imageWidth, imageHeight, rect, onChange }) => {
  const containerRef = useRef(null);
  const dragRef = useRef(null);
  const [frame, setFrame] = useState(null); // Where the image is drawn on screen

  // Fit the image inside the container (like object-fit: contain)
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const update = () => {
      const availableWidth = container.clientWidth - PADDING * 2;
      const availableHeight = container.clientHeight - PADDING * 2;
      const scale = Math.min(availableWidth / imageWidth, availableHeight / imageHeight);
      const width = imageWidth * scale;
      const height = imageHeight * scale;
      setFrame({
        left: (container.clientWidth - width) / 2,
        top: (container.clientHeight - height) / 2,
        width,
        height,
      });
    };
    update();

    const observer = new ResizeObserver(update);
    observer.observe(container);
    return () => observer.disconnect();
  }, [imageWidth, imageHeight]);

  const handlePointerDown = (e, handle) => {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.setPointerCapture(e.pointerId);
    dragRef.current = { handle, startX: e.clientX, startY: e.clientY, startRect: rect };
  };

  // Captured pointer events bubble up here from the handle being dragged
  const handlePointerMove = (e) => {
    const drag = dragRef.current;
    if (!drag || !frame) return;
    const dx = (e.clientX - drag.startX) / frame.width;
    const dy = (e.clientY - drag.startY) / frame.height;
    onChange(moveRect(drag.startRect, drag.handle, dx, dy));
  };

  const handlePointerUp = () => {
    dragRef.current = null;
  };

  return (
    <div
      ref={containerRef}
      className={styles.cropEditor}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {frame && (
        <>
          <img
            className={styles.image}
            src={src}
            alt="Photo to crop"
            draggable={false}
            style={{ left: frame.left, top: frame.top, width: frame.width, height: frame.height }}
          />
          <div
            className={styles.cropBox}
            style={{
              left: frame.left + rect.x * frame.width,
              top: frame.top + rect.y * frame.height,
              width: rect.width * frame.width,
              height: rect.height * frame.height,
            }}
          >
            <div className={styles.moveArea} onPointerDown={(e) => handlePointerDown(e, 'move')}>
              <span className={styles.gridV} />
              <span className={styles.gridH} />
            </div>
            {HANDLES.map((handle) => (
              <div
                key={handle}
                className={`${styles.handle} ${styles[handle]}`}
                onPointerDown={(e) => handlePointerDown(e, handle)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CropEditor;
