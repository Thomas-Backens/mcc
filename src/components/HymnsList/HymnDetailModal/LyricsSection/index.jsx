'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './index.module.css';
import { FileText, Plus, X, Camera, Upload, RefreshCw, Trash2, ExternalLink } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const BUCKET = 'hymn-lyrics';
const ACCEPTED_FILES = 'image/*,application/pdf,.pdf,.doc,.docx,.txt,.rtf,.odt';
const MAX_FILE_SIZE = 25 * 1024 * 1024; // Matches the bucket limit
const MAX_IMAGE_DIMENSION = 2400;

// Shrink large photos before upload so they load quickly for everyone.
// Falls back to the original file if the browser can't decode it (e.g. HEIC on some browsers).
const compressImage = async (file) => {
  if (!file.type.startsWith('image/') || file.type === 'image/gif' || file.type === 'image/svg+xml') {
    return file;
  }

  try {
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, MAX_IMAGE_DIMENSION / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(bitmap.width * scale);
    canvas.height = Math.round(bitmap.height * scale);
    canvas.getContext('2d').drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    bitmap.close?.();

    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/jpeg', 0.85));
    if (!blob || blob.size >= file.size) return file;

    return new File([blob], file.name.replace(/\.[^.]+$/, '') + '.jpg', { type: 'image/jpeg' });
  } catch (error) {
    console.warn('Could not compress image, uploading original:', error);
    return file;
  }
};

const getExtension = (file) => {
  const fromName = file.name.includes('.') ? file.name.split('.').pop().toLowerCase() : '';
  if (fromName) return fromName;
  return file.type.split('/').pop() || 'bin';
};

const LyricsSection = ({ hymn, isAdmin, onLyricsChanged }) => {
  const [lyrics, setLyrics] = useState({ path: null, type: null });
  const [viewerOpen, setViewerOpen] = useState(false);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  // Keep local copy so changes show immediately without reopening the modal
  useEffect(() => {
    setLyrics({ path: hymn?.lyricsPath || null, type: hymn?.lyricsFileType || null });
    setViewerOpen(false);
    setPickerOpen(false);
    setDeleteConfirmOpen(false);
  }, [hymn?.id, hymn?.lyricsPath, hymn?.lyricsFileType]);

  if (!hymn) return null;

  const hasLyrics = !!lyrics.path;

  // Non-admins have nothing to do when there are no lyrics
  if (!hasLyrics && !isAdmin) return null;

  const publicUrl = hasLyrics
    ? supabase.storage.from(BUCKET).getPublicUrl(lyrics.path).data.publicUrl
    : null;
  const isImage = lyrics.type?.startsWith('image/');
  const isPdf = lyrics.type === 'application/pdf';

  const handleMainClick = () => {
    if (hasLyrics) {
      setViewerOpen(true);
    } else {
      setPickerOpen(true);
    }
  };

  const handleFileSelected = async (e) => {
    const selected = e.target.files?.[0];
    // Reset so selecting the same file again still fires onChange
    e.target.value = '';
    if (!selected) return;

    setIsUploading(true);
    try {
      const file = await compressImage(selected);

      if (file.size > MAX_FILE_SIZE) {
        alert('That file is too large. Please choose a file under 25MB.');
        return;
      }

      const newPath = `${hymn.id}/${Date.now()}.${getExtension(file)}`;
      const fileType = file.type || 'application/octet-stream';

      const { error: uploadError } = await supabase.storage
        .from(BUCKET)
        .upload(newPath, file, { contentType: fileType, upsert: false });

      if (uploadError) throw uploadError;

      const { error: updateError } = await supabase
        .from('Hymns')
        .update({ lyrics_path: newPath, lyrics_file_type: fileType })
        .eq('id', hymn.id);

      if (updateError) {
        // Don't leave an orphaned file behind
        await supabase.storage.from(BUCKET).remove([newPath]);
        throw updateError;
      }

      // Remove the file being replaced
      if (lyrics.path) {
        const { error: removeError } = await supabase.storage.from(BUCKET).remove([lyrics.path]);
        if (removeError) console.error('Error removing old lyrics file:', removeError);
      }

      setLyrics({ path: newPath, type: fileType });
      setPickerOpen(false);
      setViewerOpen(true);

      if (onLyricsChanged) onLyricsChanged();
    } catch (error) {
      console.error('Error uploading lyrics:', error);
      alert('Failed to upload lyrics. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleConfirmDelete = async () => {
    if (!lyrics.path) return;

    setIsDeleting(true);
    try {
      const { error: updateError } = await supabase
        .from('Hymns')
        .update({ lyrics_path: null, lyrics_file_type: null })
        .eq('id', hymn.id);

      if (updateError) throw updateError;

      const { error: removeError } = await supabase.storage.from(BUCKET).remove([lyrics.path]);
      if (removeError) console.error('Error removing lyrics file:', removeError);

      setLyrics({ path: null, type: null });
      setDeleteConfirmOpen(false);
      setViewerOpen(false);

      if (onLyricsChanged) onLyricsChanged();
    } catch (error) {
      console.error('Error deleting lyrics:', error);
      alert('Failed to delete lyrics. Please try again.');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className={styles.lyricsSection}>
      <button
        className={`${styles.lyricsButton} ${hasLyrics ? '' : styles.addLyricsButton}`}
        onClick={handleMainClick}
      >
        {hasLyrics ? <FileText size={18} /> : <Plus size={18} />}
        {hasLyrics ? 'Lyrics' : 'Add Lyrics'}
      </button>

      {/* Hidden inputs: one for files, one that opens the camera on mobile */}
      <input
        ref={fileInputRef}
        type="file"
        accept={ACCEPTED_FILES}
        className={styles.hiddenInput}
        onChange={handleFileSelected}
      />
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className={styles.hiddenInput}
        onChange={handleFileSelected}
      />

      {pickerOpen && (
        <>
          <div
            className={`${styles.overlayBackdrop} ${styles.pickerBackdrop}`}
            onClick={() => !isUploading && setPickerOpen(false)}
          />
          <div className={styles.pickerModal}>
            <div className={styles.pickerHeader}>
              <h2>{hasLyrics ? 'Replace Lyrics' : 'Add Lyrics'}</h2>
              <button
                className={styles.iconButton}
                onClick={() => setPickerOpen(false)}
                disabled={isUploading}
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
            <p>Upload a document, PDF, or photo of the lyrics for #{hymn.id} {hymn.title}.</p>
            {isUploading ? (
              <div className={styles.uploading}>
                <div className={styles.spinner}></div>
                <h3>Uploading...</h3>
              </div>
            ) : (
              <div className={styles.pickerOptions}>
                <button className={styles.pickerOption} onClick={() => cameraInputRef.current?.click()}>
                  <Camera size={22} />
                  Take Photo
                </button>
                <button className={styles.pickerOption} onClick={() => fileInputRef.current?.click()}>
                  <Upload size={22} />
                  Choose File
                </button>
              </div>
            )}
          </div>
        </>
      )}

      {viewerOpen && hasLyrics && (
        <>
          <div className={styles.overlayBackdrop} onClick={() => setViewerOpen(false)} />
          <div className={styles.viewer}>
            <div className={styles.viewerHeader}>
              <h2>
                <span className={styles.viewerNumber}>#{hymn.id}</span> {hymn.title}
              </h2>
              <div className={styles.viewerActions}>
                <a
                  className={styles.iconButton}
                  href={publicUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open in new tab"
                  title="Open in new tab"
                >
                  <ExternalLink size={18} />
                </a>
                {isAdmin && (
                  <>
                    <button
                      className={styles.iconButton}
                      onClick={() => setPickerOpen(true)}
                      aria-label="Replace lyrics"
                      title="Replace lyrics"
                    >
                      <RefreshCw size={18} />
                    </button>
                    <button
                      className={`${styles.iconButton} ${styles.dangerButton}`}
                      onClick={() => setDeleteConfirmOpen(true)}
                      aria-label="Delete lyrics"
                      title="Delete lyrics"
                    >
                      <Trash2 size={18} />
                    </button>
                  </>
                )}
                <button
                  className={styles.iconButton}
                  onClick={() => setViewerOpen(false)}
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className={styles.viewerBody}>
              {isImage ? (
                <img className={styles.lyricsImage} src={publicUrl} alt={`Lyrics for ${hymn.title}`} />
              ) : isPdf ? (
                <iframe className={styles.lyricsFrame} src={publicUrl} title={`Lyrics for ${hymn.title}`} />
              ) : (
                <div className={styles.noPreview}>
                  <FileText size={48} />
                  <h3>This document can't be previewed here.</h3>
                  <a
                    className={styles.openButton}
                    href={publicUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} />
                    Open Document
                  </a>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {deleteConfirmOpen && (
        <>
          <div className={styles.confirmBackdrop} onClick={() => !isDeleting && setDeleteConfirmOpen(false)} />
          <div className={styles.confirmModal}>
            <h2>Delete Lyrics?</h2>
            <p>Are you sure you want to delete the lyrics for this hymn? This action cannot be undone.</p>
            <div className={styles.confirmButtons}>
              <button
                className={styles.cancelButton}
                onClick={() => setDeleteConfirmOpen(false)}
                disabled={isDeleting}
              >
                Cancel
              </button>
              <button
                className={styles.deleteConfirmButton}
                onClick={handleConfirmDelete}
                disabled={isDeleting}
              >
                {isDeleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LyricsSection;
