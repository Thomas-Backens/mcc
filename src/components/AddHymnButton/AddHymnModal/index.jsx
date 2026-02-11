'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './index.module.css';
import { X, ChevronLeft, User } from 'lucide-react';
import Searchbar from '../../Searchbar';
import DatePicker from '../../DatePicker';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/contexts/AuthContext';
import moment from 'moment';

const AddHymnModal = ({ isOpen, onClose, onLogCreated, initialHymn }) => {
  const scrollYRef = useRef(0);
  const modalRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Step 1: Hymn selection
  const [hymns, setHymns] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedHymn, setSelectedHymn] = useState(null);
  const [hadInitialHymn, setHadInitialHymn] = useState(false);

  // Step 2: Logging form
  const [adminName, setAdminName] = useState(null);
  const [name, setName] = useState('');
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [showWarning, setShowWarning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { user } = useAuth();

  // Fetch admin name
  useEffect(() => {
    const fetchAdminName = async () => {
      if (!user) {
        setAdminName(null);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('Admins')
          .select('name')
          .eq('id', user.id)
          .single();

        if (error && error.code !== 'PGRST116') {
          console.error('Error fetching admin name:', error);
          return;
        }

        if (data?.name) {
          setAdminName(data.name);
          setName(data.name);
        }
      } catch (error) {
        console.error('Error fetching admin name:', error);
      }
    };

    if (isOpen) {
      fetchAdminName();
    }
  }, [user, isOpen]);

  // Fetch hymns
  useEffect(() => {
    const fetchHymns = async () => {
      if (!isOpen) return;

      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('Hymns')
          .select('id, title')
          .order('id', { ascending: true });

        if (error) throw error;
        setHymns(data || []);
      } catch (error) {
        console.error('Error fetching hymns:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHymns();
  }, [isOpen]);

  // Set initial hymn when modal opens
  useEffect(() => {
    if (isOpen && initialHymn) {
      // Track that we had an initial hymn (hymn was already opened)
      setHadInitialHymn(true);
      // Find the hymn in the hymns list that matches the initialHymn
      const matchingHymn = hymns.find(h => h.id === initialHymn.id);
      if (matchingHymn) {
        setSelectedHymn(matchingHymn);
      } else if (initialHymn.id && initialHymn.title) {
        // If hymns haven't loaded yet, set it directly
        setSelectedHymn({ id: initialHymn.id, title: initialHymn.title });
      }
    } else if (isOpen && !initialHymn) {
      // No initial hymn, so we didn't come from an opened hymn
      setHadInitialHymn(false);
    }
  }, [isOpen, initialHymn, hymns]);

  // Modal animation logic
  useEffect(() => {
    if (isOpen) {
      scrollYRef.current = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.width = '100%';

      setShouldRender(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (modalRef.current) {
            modalRef.current.offsetHeight;
          }
          setTimeout(() => {
            setIsAnimating(true);
          }, 10);
        });
      });
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => {
        setShouldRender(false);
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollYRef.current);

        // Reset state when closing
        setSelectedHymn(null);
        setSearchQuery('');
        setDate(moment().format('YYYY-MM-DD'));
        setShowWarning(false);
        setHadInitialHymn(false);
        if (adminName) {
          setName(adminName);
        } else {
          setName('');
        }
      }, 300);

      return () => clearTimeout(timer);
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isOpen, adminName]);

  if (!shouldRender) return null;

  // Filter hymns based on search
  const filteredHymns = hymns.filter(hymn => {
    if (!searchQuery) return true;
    const searchLower = searchQuery.toLowerCase();
    return (
      hymn.title.toLowerCase().includes(searchLower) ||
      hymn.id.toString().includes(searchLower)
    );
  });

  const handleHymnSelect = (hymn) => {
    setSelectedHymn(hymn);
  };

  const handleBackToSelection = () => {
    // If we came from an opened hymn, close the modal instead of going back to selection
    if (hadInitialHymn) {
      onClose();
    } else {
      // Otherwise, go back to the hymn selection list
      setSelectedHymn(null);
      setShowWarning(false);
    }
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    setShowWarning(false);
  };

  const handleSubmit = async () => {
    if (!selectedHymn) return;

    const selectedDate = moment(date);
    const dayOfWeek = selectedDate.day(); // 0 = Sunday, 3 = Wednesday

    // Check if date is not Sunday (0) or Wednesday (3)
    if (dayOfWeek !== 0 && dayOfWeek !== 3) {
      setShowWarning(true);
      return;
    }

    setIsSubmitting(true);

    try {
      const logData = {
        song_number: selectedHymn.id,
        logged_by: name.trim() || 'Anonymous',
        created_at: moment().toISOString(),
      };

      const { error } = await supabase
        .from('Logs')
        .insert([logData]);

      if (error) throw error;

      // Call callback to refresh data
      if (onLogCreated) {
        onLogCreated();
      }

      // Close modal
      onClose();
    } catch (error) {
      console.error('Error creating log:', error);
      alert('Failed to log hymn. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleConfirmSubmit = async () => {
    setIsSubmitting(true);

    try {
      const logData = {
        id: crypto.randomUUID(),
        song_number: selectedHymn.id,
        logged_by: name.trim() || 'Anonymous',
        created_at: moment().toISOString(),
      };

      const { error } = await supabase
        .from('Logs')
        .insert([logData]);

      if (error) throw error;

      if (onLogCreated) {
        onLogCreated();
      }

      onClose();
    } catch (error) {
      console.error('Error creating log:', error);
      alert('Failed to log hymn. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedDateMoment = moment(date);
  const dayOfWeek = selectedDateMoment.day();
  const isSundayOrWednesday = dayOfWeek === 0 || dayOfWeek === 3;

  return (
    <>
      <div className={`${styles.backdrop} ${isAnimating ? styles.open : ''}`} onClick={onClose} />
      <div ref={modalRef} className={`${styles.modal} ${isAnimating ? styles.open : ''}`}>
        <div className={styles.modalHeader}>
          <div className={styles.headerContent}>
            {selectedHymn ? (
              <>
                <button className={styles.backButton} onClick={handleBackToSelection}>
                  <ChevronLeft size={24} />
                </button>
                <div className={styles.hymnNumber}>
                  <h2>{selectedHymn.id}</h2>
                </div>
                <div className={styles.headerInfo}>
                  <h1>{selectedHymn.title}</h1>
                </div>
              </>
            ) : (
              <h1>Select a Hymn to Log</h1>
            )}
          </div>
          <button className={styles.closeButton} onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className={styles.modalContent}>
          {!selectedHymn ? (
            // Step 1: Hymn Selection
            <div className={styles.selectionStep}>
              <div className={styles.searchContainer}>
                <Searchbar
                  value={searchQuery}
                  placeholder="Search hymns..."
                  onChange={(e) => setSearchQuery(e.target.value)}
                  flex
                />
              </div>
              <div className={styles.hymnsList}>
                {loading ? (
                  <div className={styles.loading}>
                    <h3>Loading hymns...</h3>
                  </div>
                ) : filteredHymns.length === 0 ? (
                  <div className={styles.empty}>
                    <h3>No hymns found</h3>
                  </div>
                ) : (
                  filteredHymns.map((hymn) => (
                    <div
                      key={hymn.id}
                      className={styles.hymnItem}
                      onClick={() => handleHymnSelect(hymn)}
                    >
                      <div className={styles.hymnItemNumber}>
                        <h2>{hymn.id}</h2>
                      </div>
                      <div className={styles.hymnItemTitle}>
                        <h2>{hymn.title}</h2>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          ) : (
            // Step 2: Logging Form
            <div className={styles.loggingStep}>
              <div className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <div className={styles.inputContainer}>
                    <User className={styles.inputIcon} size={20} color={"var(--light-grey)"} />
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name (or leave blank for Anonymous)"
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="date">Date</label>
                  <DatePicker
                    value={date}
                    onChange={handleDateChange}
                  />
                </div>

                {showWarning && (
                  <div className={styles.warning}>
                    <h3>Warning</h3>
                    <p>
                      You are logging for {selectedDateMoment.format('dddd, MMMM Do, YYYY')},
                      which is not a Sunday or Wednesday. Are you sure this is correct?
                    </p>
                    <div className={styles.warningActions}>
                      <button
                        className={styles.warningButton}
                        onClick={() => setShowWarning(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className={`${styles.warningButton} ${styles.confirmButton}`}
                        onClick={handleConfirmSubmit}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Logging...' : 'Yes, Log It'}
                      </button>
                    </div>
                  </div>
                )}

                <div className={styles.formActions}>
                  <button
                    className={styles.cancelButton}
                    onClick={handleBackToSelection}
                    disabled={isSubmitting}
                  >
                    Back
                  </button>
                  <button
                    className={styles.submitButton}
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Logging...' : 'Log Hymn'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AddHymnModal;
