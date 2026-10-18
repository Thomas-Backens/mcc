'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './index.module.css';
import { X, Plus, Check, Camera, Images, Pencil, ArrowLeft, Maximize } from 'lucide-react';
import { PAGE_ASPECT, SPREAD_ASPECT, cropToCanvas, composeParts, buildPdf } from '@/lib/scanDocument';
import CropEditor from './CropEditor';

// Size of the guide rectangle relative to the camera area
const GUIDE_MAX_WIDTH = 0.92;
const GUIDE_MAX_HEIGHT = 0.8;
const MAX_SHOT_SIZE = 2600; // Longest side kept for each photo
const FULL_RECT = { x: 0, y: 0, width: 1, height: 1 };

const getGuideRect = (containerWidth, containerHeight, aspect) => {
  const width = Math.min(containerWidth * GUIDE_MAX_WIDTH, containerHeight * GUIDE_MAX_HEIGHT * aspect);
  const height = width / aspect;
  return {
    left: (containerWidth - width) / 2,
    top: (containerHeight - height) / 2,
    width,
    height,
  };
};

const canvasToObjectUrl = (canvas) =>
  new Promise((resolve) =>
    canvas.toBlob((blob) => resolve(blob ? URL.createObjectURL(blob) : canvas.toDataURL('image/jpeg', 0.9)), 'image/jpeg', 0.9)
  );

// Steps: camera -> crop -> review. "Add Part" goes to choose (reuse a photo or take a new one) -> crop -> review.
// Every part is stacked vertically into one tall page, so a hymn that continues
// onto the next page (or the next column) ends up as one continuous image.
const DocumentScanner = ({ fileName, onComplete, onCancel }) => {
  const videoRef = useRef(null);
  const viewportRef = useRef(null);
  const streamRef = useRef(null);
  const shotUrlsRef = useRef([]);
  const libraryInputRef = useRef(null);
  const cameraInputRef = useRef(null);
  const [viewportSize, setViewportSize] = useState(null);
  const [cameraState, setCameraState] = useState('starting'); // starting | ready | unavailable
  const [guideMode, setGuideMode] = useState('page'); // page | spread
  const [step, setStep] = useState('camera'); // camera | crop | choose | review
  const [shots, setShots] = useState([]); // [{ canvas, url }]
  const [parts, setParts] = useState([]); // [{ shotIndex, rect }]
  const [editing, setEditing] = useState(null); // { shotIndex, rect, partIndex }
  const [enhance, setEnhance] = useState(true);
  const [result, setResult] = useState(null); // { canvas, url }
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
      shotUrlsRef.current.forEach((url) => url.startsWith('blob:') && URL.revokeObjectURL(url));
    };
  }, []);

  // Track the camera area size so the guide rectangle fits it
  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const update = () => setViewportSize({ width: viewport.clientWidth, height: viewport.clientHeight });
    update();

    const observer = new ResizeObserver(update);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  // Rebuild the stacked preview whenever the parts or the enhance setting change
  useEffect(() => {
    if (step !== 'review' || parts.length === 0) return;

    let cancelled = false;
    setIsProcessing(true);
    // Let the spinner paint before the heavy pixel work
    const timer = setTimeout(() => {
      try {
        const canvas = composeParts(
          parts.map((part) => ({ source: shots[part.shotIndex].canvas, rect: part.rect })),
          { enhance }
        );
        if (!cancelled) setResult({ canvas, url: canvas.toDataURL('image/jpeg', 0.8) });
      } catch (error) {
        console.error('Error building scan:', error);
        if (!cancelled) alert('Failed to process the scan. Please try again.');
      } finally {
        if (!cancelled) setIsProcessing(false);
      }
    }, 30);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [step, parts, enhance, shots]);

  const guideAspect = guideMode === 'spread' ? SPREAD_ASPECT : PAGE_ASPECT;
  const guide = viewportSize ? getGuideRect(viewportSize.width, viewportSize.height, guideAspect) : null;

  const addShot = async (canvas) => {
    const url = await canvasToObjectUrl(canvas);
    shotUrlsRef.current.push(url);
    const shotIndex = shots.length;
    setShots((prev) => [...prev, { canvas, url }]);
    setEditing({ shotIndex, rect: FULL_RECT, partIndex: null });
    setStep('crop');
  };

  const handleCapture = () => {
    const video = videoRef.current;
    if (!video || !guide || !video.videoWidth) return;

    setIsProcessing(true);
    setTimeout(async () => {
      try {
        // Map the on-screen guide (video uses object-fit: cover) to video pixels
        const vw = video.videoWidth;
        const vh = video.videoHeight;
        const scale = Math.max(viewportSize.width / vw, viewportSize.height / vh);
        const offsetX = (viewportSize.width - vw * scale) / 2;
        const offsetY = (viewportSize.height - vh * scale) / 2;

        const sx = Math.max(0, (guide.left - offsetX) / scale);
        const sy = Math.max(0, (guide.top - offsetY) / scale);
        const sw = Math.min(vw - sx, guide.width / scale);
        const sh = Math.min(vh - sy, guide.height / scale);

        await addShot(cropToCanvas(video, sx, sy, sw, sh, MAX_SHOT_SIZE, MAX_SHOT_SIZE));
      } catch (error) {
        console.error('Error capturing photo:', error);
        alert('Failed to capture the photo. Please try again.');
      } finally {
        setIsProcessing(false);
      }
    }, 30);
  };

  // Photos from the library, or from the phone camera when live camera isn't available
  const handlePhotoFile = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;

    setIsProcessing(true);
    try {
      const bitmap = await createImageBitmap(file);
      const canvas = cropToCanvas(bitmap, 0, 0, bitmap.width, bitmap.height, MAX_SHOT_SIZE, MAX_SHOT_SIZE);
      bitmap.close?.();
      await addShot(canvas);
    } catch (error) {
      console.error('Error loading photo:', error);
      alert("Couldn't open that photo. Please try another one.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleUseSelection = () => {
    const part = { shotIndex: editing.shotIndex, rect: editing.rect };
    setParts((prev) =>
      editing.partIndex === null ? [...prev, part] : prev.map((p, i) => (i === editing.partIndex ? part : p))
    );
    setEditing(null);
    setStep('review');
  };

  const handleCropBack = () => {
    const isNewPart = editing?.partIndex === null;
    setEditing(null);
    // A new part goes back to where it came from; editing an existing part returns to review
    setStep(!isNewPart ? 'review' : parts.length > 0 ? 'choose' : 'camera');
  };

  const handleEditPart = (partIndex) => {
    setEditing({ ...parts[partIndex], partIndex });
    setStep('crop');
  };

  const handleRemovePart = (partIndex) => {
    const remaining = parts.filter((_, i) => i !== partIndex);
    setParts(remaining);
    if (remaining.length === 0) {
      setResult(null);
      setStep('camera');
    }
  };

  const handleChooseShot = (shotIndex) => {
    setEditing({ shotIndex, rect: FULL_RECT, partIndex: null });
    setStep('crop');
  };

  const handleClose = () => {
    if (parts.length > 0 && !window.confirm('Discard this scan?')) return;
    onCancel();
  };

  const handleSave = async () => {
    if (!result) return;
    setIsProcessing(true);
    try {
      const blob = await buildPdf([result.canvas]);
      onComplete(new File([blob], `${fileName || 'lyrics'}.pdf`, { type: 'application/pdf' }));
    } catch (error) {
      console.error('Error creating PDF:', error);
      alert('Failed to create the PDF. Please try again.');
      setIsProcessing(false);
    }
  };

  const editingShot = editing ? shots[editing.shotIndex] : null;
  const titles = {
    camera: parts.length > 0 ? `Part ${parts.length + 1}` : 'Scan Lyrics',
    crop: 'Crop to the Hymn',
    choose: 'Add Part',
    review: 'Review',
  };

  return (
    <div className={styles.scanner}>
      <div className={styles.header}>
        <button className={styles.iconButton} onClick={handleClose} disabled={isProcessing} aria-label="Cancel scan">
          <X size={20} />
        </button>
        <h2>{titles[step]}</h2>
        <div className={styles.pageCount}>
          {parts.length > 0 && `${parts.length} part${parts.length === 1 ? '' : 's'}`}
        </div>
      </div>

      <input
        ref={libraryInputRef}
        type="file"
        accept="image/*"
        className={styles.hiddenInput}
        onChange={handlePhotoFile}
      />
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className={styles.hiddenInput}
        onChange={handlePhotoFile}
      />

      <div ref={viewportRef} className={styles.viewport}>
        {/* The video stays mounted so the camera doesn't restart between parts */}
        <video
          ref={videoRef}
          className={`${styles.video} ${step === 'camera' ? '' : styles.hidden}`}
          playsInline
          muted
          autoPlay
        />

        {step === 'camera' && cameraState === 'ready' && guide && (
          <>
            <div
              className={styles.guide}
              style={{ left: guide.left, top: guide.top, width: guide.width, height: guide.height }}
            >
              <span className={`${styles.corner} ${styles.topLeft}`} />
              <span className={`${styles.corner} ${styles.topRight}`} />
              <span className={`${styles.corner} ${styles.bottomLeft}`} />
              <span className={`${styles.corner} ${styles.bottomRight}`} />
              {guideMode === 'spread' && <span className={styles.spine} />}
              <p className={styles.hint}>
                {guideMode === 'spread' ? 'Line up both pages' : 'Line up the page'}
              </p>
            </div>
            <div className={styles.modeToggle}>
              <button
                className={guideMode === 'page' ? styles.modeActive : ''}
                onClick={() => setGuideMode('page')}
              >
                1 Page
              </button>
              <button
                className={guideMode === 'spread' ? styles.modeActive : ''}
                onClick={() => setGuideMode('spread')}
              >
                2 Pages
              </button>
            </div>
          </>
        )}

        {step === 'camera' && cameraState === 'starting' && (
          <div className={styles.message}>
            <div className={styles.spinner}></div>
            <h3>Starting camera...</h3>
          </div>
        )}

        {step === 'camera' && cameraState === 'unavailable' && (
          <div className={styles.message}>
            <Camera size={40} />
            <h3>Live camera isn't available</h3>
            <p>Check that camera access is allowed, or take or choose a photo instead.</p>
            <div className={styles.messageButtons}>
              <button className={styles.primaryButton} onClick={() => cameraInputRef.current?.click()}>
                <Camera size={18} />
                Take Photo
              </button>
              <button className={styles.secondaryButton} onClick={() => libraryInputRef.current?.click()}>
                <Images size={18} />
                Choose Photo
              </button>
            </div>
          </div>
        )}

        {step === 'crop' && editingShot && (
          <CropEditor
            src={editingShot.url}
            imageWidth={editingShot.canvas.width}
            imageHeight={editingShot.canvas.height}
            rect={editing.rect}
            onChange={(rect) => setEditing((prev) => ({ ...prev, rect }))}
          />
        )}

        {step === 'choose' && (
          <div className={styles.choose}>
            <p className={styles.chooseHint}>
              Pick a photo you already took (like the other page of the same photo), or take a new one. It will be
              added below what you have so far.
            </p>
            <div className={styles.shotGrid}>
              {shots.map((shot, i) => (
                <button key={shot.url} className={styles.shotOption} onClick={() => handleChooseShot(i)}>
                  <img src={shot.url} alt={`Photo ${i + 1}`} />
                  <span>Photo {i + 1}</span>
                </button>
              ))}
            </div>
            <div className={styles.chooseActions}>
              <button className={styles.primaryButton} onClick={() => setStep('camera')}>
                <Camera size={18} />
                New Photo
              </button>
              <button className={styles.secondaryButton} onClick={() => libraryInputRef.current?.click()}>
                <Images size={18} />
                From Library
              </button>
            </div>
          </div>
        )}

        {step === 'review' && (
          <div className={styles.review}>
            <div className={styles.reviewToolbar}>
              <div className={styles.modeToggleInline}>
                <button className={enhance ? styles.modeActive : ''} onClick={() => setEnhance(true)}>
                  Enhanced
                </button>
                <button className={!enhance ? styles.modeActive : ''} onClick={() => setEnhance(false)}>
                  Original
                </button>
              </div>
              <div className={styles.partChips}>
                {parts.map((_, i) => (
                  <div key={i} className={styles.partChip}>
                    <button onClick={() => handleEditPart(i)} aria-label={`Edit crop for part ${i + 1}`}>
                      <Pencil size={14} />
                      Part {i + 1}
                    </button>
                    <button onClick={() => handleRemovePart(i)} aria-label={`Remove part ${i + 1}`}>
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.reviewScroll}>
              {result && <img src={result.url} alt="Scanned lyrics preview" />}
            </div>
          </div>
        )}

        {isProcessing && (
          <div className={styles.processing}>
            <div className={styles.spinner}></div>
          </div>
        )}
      </div>

      <div className={styles.controls}>
        {step === 'camera' && (
          <>
            <div className={styles.controlSide}>
              <button
                className={styles.roundButton}
                onClick={() => libraryInputRef.current?.click()}
                disabled={isProcessing}
                aria-label="Choose photo from library"
              >
                <Images size={22} />
              </button>
            </div>
            <button
              className={styles.shutter}
              onClick={handleCapture}
              disabled={cameraState !== 'ready' || isProcessing}
              aria-label="Take photo"
            />
            <div className={styles.controlSide}>
              {parts.length > 0 && (
                <button className={styles.textButton} onClick={() => setStep('review')} disabled={isProcessing}>
                  Back
                </button>
              )}
            </div>
          </>
        )}

        {step === 'crop' && (
          <>
            <button className={styles.secondaryButton} onClick={handleCropBack} disabled={isProcessing}>
              <ArrowLeft size={18} />
              {editing?.partIndex === null ? 'Retake' : 'Back'}
            </button>
            <button
              className={styles.secondaryButton}
              onClick={() => setEditing((prev) => ({ ...prev, rect: FULL_RECT }))}
              disabled={isProcessing}
            >
              <Maximize size={18} />
              Full
            </button>
            <button className={styles.primaryButton} onClick={handleUseSelection} disabled={isProcessing}>
              <Check size={18} />
              Use
            </button>
          </>
        )}

        {step === 'choose' && (
          <button className={styles.secondaryButton} onClick={() => setStep('review')}>
            <ArrowLeft size={18} />
            Back to Review
          </button>
        )}

        {step === 'review' && (
          <>
            <button className={styles.secondaryButton} onClick={() => setStep('choose')} disabled={isProcessing}>
              <Plus size={18} />
              Add Part
            </button>
            <button className={styles.primaryButton} onClick={handleSave} disabled={isProcessing || !result}>
              <Check size={18} />
              Save PDF
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default DocumentScanner;
