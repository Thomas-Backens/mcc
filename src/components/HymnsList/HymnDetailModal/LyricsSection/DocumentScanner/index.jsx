'use client';

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './index.module.css';
import { X, RotateCcw, Plus, Check, Camera } from 'lucide-react';
import { PAGE_ASPECT, enhanceDocument, buildPdf } from '@/lib/scanDocument';

// Size of the guide rectangle relative to the camera area
const GUIDE_MAX_WIDTH = 0.88;
const GUIDE_MAX_HEIGHT = 0.85;

const getGuideRect = (containerWidth, containerHeight) => {
  const width = Math.min(containerWidth * GUIDE_MAX_WIDTH, containerHeight * GUIDE_MAX_HEIGHT * PAGE_ASPECT);
  const height = width / PAGE_ASPECT;
  return {
    left: (containerWidth - width) / 2,
    top: (containerHeight - height) / 2,
    width,
    height,
  };
};

const DocumentScanner = ({ fileName, onComplete, onCancel }) => {
  const videoRef = useRef(null);
  const viewportRef = useRef(null);
  const streamRef = useRef(null);
  const fallbackInputRef = useRef(null);
  const [guide, setGuide] = useState(null);
  const [cameraState, setCameraState] = useState('starting'); // starting | ready | unavailable
  const [pages, setPages] = useState([]); // [{ canvas, preview }]
  const [reviewing, setReviewing] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Start the rear camera once, keep it running until the scanner closes
  useEffect(() => {
    let cancelled = false;

    const startCamera = async () => {
      if (!navigator.mediaDevices?.getUserMedia) {
        setCameraState('unavailable');
        return;
      }
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: false,
          video: {
            facingMode: { ideal: 'environment' },
            width: { ideal: 3840 },
            height: { ideal: 2160 },
          },
        });
        if (cancelled) {
          stream.getTracks().forEach((track) => track.stop());
          return;
        }
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play().catch(() => {});
        }
        setCameraState('ready');
      } catch (error) {
        console.error('Error starting camera:', error);
        if (!cancelled) setCameraState('unavailable');
      }
    };

    startCamera();

    return () => {
      cancelled = true;
      streamRef.current?.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    };
  }, []);

  // Keep the guide rectangle sized to the camera area
  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const update = () => setGuide(getGuideRect(viewport.clientWidth, viewport.clientHeight));
    update();

    const observer = new ResizeObserver(update);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  const addPage = useCallback((canvas) => {
    setPages((prev) => [...prev, { canvas, preview: canvas.toDataURL('image/jpeg', 0.7) }]);
    setReviewing(true);
  }, []);

  const handleCapture = () => {
    const video = videoRef.current;
    const viewport = viewportRef.current;
    if (!video || !viewport || !guide || !video.videoWidth) return;

    setIsProcessing(true);
    // Let the spinner paint before the heavy pixel work
    setTimeout(() => {
      try {
        // Map the on-screen guide (video uses object-fit: cover) to video pixels
        const vw = video.videoWidth;
        const vh = video.videoHeight;
        const cw = viewport.clientWidth;
        const ch = viewport.clientHeight;
        const scale = Math.max(cw / vw, ch / vh);
        const offsetX = (cw - vw * scale) / 2;
        const offsetY = (ch - vh * scale) / 2;

        const sx = Math.max(0, (guide.left - offsetX) / scale);
        const sy = Math.max(0, (guide.top - offsetY) / scale);
        const sw = Math.min(vw - sx, guide.width / scale);
        const sh = Math.min(vh - sy, guide.height / scale);

        addPage(enhanceDocument(video, sx, sy, sw, sh));
      } catch (error) {
        console.error('Error scanning page:', error);
        alert('Failed to scan the page. Please try again.');
      } finally {
        setIsProcessing(false);
      }
    }, 30);
  };

  // Used when live camera access isn't available: process a regular photo instead
  const handleFallbackPhoto = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;

    setIsProcessing(true);
    try {
      const bitmap = await createImageBitmap(file);
      addPage(enhanceDocument(bitmap, 0, 0, bitmap.width, bitmap.height));
      bitmap.close?.();
    } catch (error) {
      console.error('Error processing photo:', error);
      alert('Failed to process the photo. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleRetake = () => {
    setPages((prev) => prev.slice(0, -1));
    setReviewing(false);
  };

  const handleAddAnother = () => {
    setReviewing(false);
  };

  const handleDone = async () => {
    if (pages.length === 0) return;
    setIsProcessing(true);
    try {
      const blob = await buildPdf(pages.map((page) => page.canvas));
      onComplete(new File([blob], `${fileName || 'lyrics'}.pdf`, { type: 'application/pdf' }));
    } catch (error) {
      console.error('Error creating PDF:', error);
      alert('Failed to create the PDF. Please try again.');
      setIsProcessing(false);
    }
  };

  const lastPage = pages[pages.length - 1];
  const showCamera = !reviewing;

  return (
    <div className={styles.scanner}>
      <div className={styles.header}>
        <button className={styles.iconButton} onClick={onCancel} disabled={isProcessing} aria-label="Cancel scan">
          <X size={20} />
        </button>
        <h2>{reviewing ? `Page ${pages.length}` : 'Scan Lyrics'}</h2>
        <div className={styles.pageCount}>
          {pages.length > 0 && `${pages.length} page${pages.length === 1 ? '' : 's'}`}
        </div>
      </div>

      <div ref={viewportRef} className={styles.viewport}>
        <video
          ref={videoRef}
          className={`${styles.video} ${showCamera ? '' : styles.hidden}`}
          playsInline
          muted
          autoPlay
        />

        {showCamera && cameraState === 'ready' && guide && (
          <div
            className={styles.guide}
            style={{ left: guide.left, top: guide.top, width: guide.width, height: guide.height }}
          >
            <span className={`${styles.corner} ${styles.topLeft}`} />
            <span className={`${styles.corner} ${styles.topRight}`} />
            <span className={`${styles.corner} ${styles.bottomLeft}`} />
            <span className={`${styles.corner} ${styles.bottomRight}`} />
            <p className={styles.hint}>Line up the page inside the rectangle</p>
          </div>
        )}

        {showCamera && cameraState === 'starting' && (
          <div className={styles.message}>
            <div className={styles.spinner}></div>
            <h3>Starting camera...</h3>
          </div>
        )}

        {showCamera && cameraState === 'unavailable' && (
          <div className={styles.message}>
            <Camera size={40} />
            <h3>Live camera isn't available</h3>
            <p>Check that camera access is allowed, or take a photo instead. It will still be cleaned up and saved as a PDF.</p>
            <button className={styles.primaryButton} onClick={() => fallbackInputRef.current?.click()}>
              <Camera size={18} />
              Take Photo
            </button>
            <input
              ref={fallbackInputRef}
              type="file"
              accept="image/*"
              capture="environment"
              className={styles.hiddenInput}
              onChange={handleFallbackPhoto}
            />
          </div>
        )}

        {reviewing && lastPage && (
          <div className={styles.review}>
            <img src={lastPage.preview} alt={`Scanned page ${pages.length}`} />
          </div>
        )}

        {isProcessing && (
          <div className={styles.processing}>
            <div className={styles.spinner}></div>
          </div>
        )}
      </div>

      <div className={styles.controls}>
        {reviewing ? (
          <>
            <button className={styles.secondaryButton} onClick={handleRetake} disabled={isProcessing}>
              <RotateCcw size={18} />
              Retake
            </button>
            <button className={styles.secondaryButton} onClick={handleAddAnother} disabled={isProcessing}>
              <Plus size={18} />
              Add Page
            </button>
            <button className={styles.primaryButton} onClick={handleDone} disabled={isProcessing}>
              <Check size={18} />
              Save PDF
            </button>
          </>
        ) : (
          <>
            <div className={styles.controlSide}>
              {pages.length > 0 && (
                <button className={styles.thumbnail} onClick={() => setReviewing(true)} aria-label="Review last page">
                  <img src={lastPage.preview} alt="" />
                </button>
              )}
            </div>
            <button
              className={styles.shutter}
              onClick={handleCapture}
              disabled={cameraState !== 'ready' || isProcessing}
              aria-label="Scan page"
            />
            <div className={styles.controlSide}>
              {pages.length > 0 && (
                <button className={styles.doneButton} onClick={handleDone} disabled={isProcessing}>
                  Done
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DocumentScanner;
