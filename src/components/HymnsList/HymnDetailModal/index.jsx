'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './index.module.css';
import { X, Trash2 } from 'lucide-react';
import moment from 'moment';
import { supabase } from '@/lib/supabase';

const HymnDetailModal = ({ hymn, isOpen, onClose, isSuperAdmin, onLogDeleted }) => {
  const scrollYRef = useRef(0);
  const modalRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [logToDelete, setLogToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (isOpen && hymn) {
      // Save current scroll position
      scrollYRef.current = window.scrollY;

      // Prevent scrolling on body and html
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      // Prevent scrolling on touch devices without layout shift
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.width = '100%';

      // Render the modal first, then trigger animation
      setShouldRender(true);
      // Use requestAnimationFrame + setTimeout to ensure the element is fully rendered
      // This is especially important on mobile devices
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          // Force a reflow by accessing offsetHeight to ensure styles are applied
          if (modalRef.current) {
            modalRef.current.offsetHeight;
          }
          // Small delay to ensure mobile browsers have applied initial styles
          setTimeout(() => {
            setIsAnimating(true);
          }, 10);
        });
      });
    } else {
      // Start closing animation
      setIsAnimating(false);
      // Wait for animation to complete before removing from DOM
      const timer = setTimeout(() => {
        setShouldRender(false);
        // Restore scrolling
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        // Restore scroll position
        window.scrollTo(0, scrollYRef.current);
      }, 300); // Match the CSS transition duration

      return () => clearTimeout(timer);
    }

    return () => {
      // Cleanup: restore scrolling
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isOpen, hymn]);

  if (!shouldRender || !hymn) return null;

  const timesSang = hymn.logHistory?.length || 0;
  const lastSang = hymn.lastSang ? moment(hymn.lastSang).format("MMMM Do, YYYY") : 'Never';

  const handleDeleteClick = (e, log) => {
    e.stopPropagation();
    setLogToDelete(log);
    setDeleteConfirmOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!logToDelete) return;

    setIsDeleting(true);
    try {
      const { error } = await supabase
        .from('Logs')
        .delete()
        .eq('id', logToDelete.id);

      if (error) throw error;

      // Close confirmation modal
      setDeleteConfirmOpen(false);
      setLogToDelete(null);

      // Trigger refresh
      if (onLogDeleted) {
        onLogDeleted();
      }

      // Close the main modal to show updated data when reopened
      onClose();
    } catch (error) {
      console.error('Error deleting log:', error);
      alert('Failed to delete log. Please try again.');
    } finally {
      setIsDeleting(false);
    }
  };

  const handleCancelDelete = () => {
    setDeleteConfirmOpen(false);
    setLogToDelete(null);
  };

  return (
    <>
      <div className={`${styles.backdrop} ${isAnimating ? styles.open : ''}`} onClick={onClose} />
      <div ref={modalRef} className={`${styles.modal} ${isAnimating ? styles.open : ''}`}>
        <div className={styles.modalHeader}>
          <div className={styles.headerContent}>
            <div className={styles.hymnNumber}>
              <h2>{hymn.id}</h2>
            </div>
            <div className={styles.headerInfo}>
              <h1>{hymn.title}</h1>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <h3>Times sang:</h3>
                  <h2>{timesSang}</h2>
                </div>
                <div className={styles.stat}>
                  <h3>Last sang:</h3>
                  <h2>{lastSang}</h2>
                </div>
              </div>
            </div>
          </div>
          <button className={styles.closeButton} onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        <div className={styles.modalContent}>
          <div className={styles.logsSection}>
            <h2 className={styles.logsTitle}>Log History</h2>
            <div className={styles.logsContainer}>
              {hymn.logHistory && hymn.logHistory.length > 0 ? (
                hymn.logHistory.map((log) => (
                  <div key={log.id} className={styles.logItem}>
                    <div className={styles.logDate}>
                      <h2>{moment(log.created_at).format("MMMM Do, YYYY")}</h2>
                    </div>
                    <div className={styles.logInfo}>
                      <h4>{log.logged_by || 'Anonymous'}</h4>
                      {isSuperAdmin && (
                        <button
                          className={styles.deleteButton}
                          onClick={(e) => handleDeleteClick(e, log)}
                          aria-label="Delete log"
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className={styles.noLogs}>
                  <h3>No logs available</h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {deleteConfirmOpen && (
        <>
          <div className={styles.confirmBackdrop} onClick={handleCancelDelete} />
          <div className={styles.confirmModal}>
            <h2>Delete Log?</h2>
            <p>Are you sure you want to delete this log? This action cannot be undone.</p>
            <div className={styles.confirmButtons}>
              <button
                className={styles.cancelButton}
                onClick={handleCancelDelete}
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
    </>
  );
};

export default HymnDetailModal;
