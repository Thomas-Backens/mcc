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
  const [isCreatingHymn, setIsCreatingHymn] = useState(false);

  // Step 2: Logging form
  const [adminName, setAdminName] = useState(null);
  const [name, setName] = useState('');
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [showWarning, setShowWarning] = useState(false);
  const [showDuplicateWarning, setShowDuplicateWarning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDateConfirmation, setShowDateConfirmation] = useState(false);
  const [pendingDate, setPendingDate] = useState(null);

  // Step 3: Create hymn form
  const [hymnTitle, setHymnTitle] = useState('');
  const [hymnNumber, setHymnNumber] = useState('');
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);

  const { user } = useAuth();

  // Fetch admin name and super admin status
  useEffect(() => {
    const fetchAdminData = async () => {
      if (!user) {
        setAdminName(null);
        setIsSuperAdmin(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('Admins')
          .select('name, is_super_admin')
          .eq('id', user.id)
          .single();

        if (error && error.code !== 'PGRST116') {
          console.error('Error fetching admin data:', error);
          return;
        }

        if (data?.name) {
          setAdminName(data.name);
          setName(data.name);
        }
        setIsSuperAdmin(data?.is_super_admin || false);
      } catch (error) {
        console.error('Error fetching admin data:', error);
      }
    };

    if (isOpen) {
      fetchAdminData();
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
        setShowDuplicateWarning(false);
        setShowDateConfirmation(false);
        setPendingDate(null);
        setHadInitialHymn(false);
        setIsCreatingHymn(false);
        setHymnTitle('');
        setHymnNumber('');
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
      setIsCreatingHymn(false);
      setShowWarning(false);
      setHymnTitle('');
      setHymnNumber('');
    }
  };

  const handleCreateHymnClick = () => {
    setIsCreatingHymn(true);
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    const selectedDate = moment(newDate);
    const dayOfWeek = selectedDate.day(); // 0 = Sunday, 3 = Wednesday

    // Check if date is not Sunday (0) or Wednesday (3)
    if (dayOfWeek !== 0 && dayOfWeek !== 3) {
      // Show confirmation dialog
      setPendingDate(newDate);
      setShowDateConfirmation(true);
    } else {
      // It's Sunday or Wednesday, set the date directly
      setDate(newDate);
      setShowWarning(false);
      setShowDuplicateWarning(false);
    }
  };

  const handleConfirmDate = () => {
    if (pendingDate) {
      setDate(pendingDate);
      setPendingDate(null);
    }
    setShowDateConfirmation(false);
    setShowWarning(false);
    setShowDuplicateWarning(false);
  };

  const handleCancelDate = () => {
    setPendingDate(null);
    setShowDateConfirmation(false);
  };

  const handleSubmit = async () => {
    if (!selectedHymn) return;

    setIsSubmitting(true);

    try {
      const normalizedDate = moment.utc(date).startOf('day').toISOString();

      // Check if a log already exists for this hymn on this date
      const { data: existingLogs, error: checkError } = await supabase
        .from('Logs')
        .select('id')
        .eq('song_number', selectedHymn.id)
        .eq('created_at', normalizedDate);

      if (checkError) throw checkError;

      // If a log already exists, show duplicate warning
      if (existingLogs && existingLogs.length > 0) {
        setShowDuplicateWarning(true);
        setIsSubmitting(false);
        return;
      }

      const logData = {
        song_number: selectedHymn.id,
        logged_by: name.trim() || 'Anonymous',
        created_at: normalizedDate,
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
      const normalizedDate = moment.utc(date).startOf('day').toISOString();

      // Check if a log already exists for this hymn on this date
      const { data: existingLogs, error: checkError } = await supabase
        .from('Logs')
        .select('id')
        .eq('song_number', selectedHymn.id)
        .eq('created_at', normalizedDate);

      if (checkError) throw checkError;

      // If a log already exists, show duplicate warning
      if (existingLogs && existingLogs.length > 0) {
        setShowDuplicateWarning(true);
        setShowWarning(false);
        setIsSubmitting(false);
        return;
      }

      const logData = {
        id: crypto.randomUUID(),
        song_number: selectedHymn.id,
        logged_by: name.trim() || 'Anonymous',
        created_at: normalizedDate,
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

  const handleCreateHymnSubmit = async () => {
    if (!hymnTitle.trim() || !hymnNumber.trim()) {
      alert('Please fill in both hymn name and hymn number.');
      return;
    }

    const hymnNumberInt = parseInt(hymnNumber, 10);
    if (isNaN(hymnNumberInt) || hymnNumberInt <= 0) {
      alert('Please enter a valid hymn number.');
      return;
    }

    setIsSubmitting(true);

    try {
      const normalizedDate = moment.utc(date).startOf('day').toISOString();

      // Check if hymn number already exists
      const { data: existingHymn, error: checkHymnError } = await supabase
        .from('Hymns')
        .select('id')
        .eq('id', hymnNumberInt)
        .single();

      if (checkHymnError && checkHymnError.code !== 'PGRST116') {
        throw checkHymnError;
      }

      if (existingHymn) {
        alert('A hymn with this number already exists. Please choose a different number.');
        setIsSubmitting(false);
        return;
      }

      // Check if a log already exists for this hymn number on this date (shouldn't happen, but just in case)
      const { data: existingLogs, error: checkLogError } = await supabase
        .from('Logs')
        .select('id')
        .eq('song_number', hymnNumberInt)
        .eq('created_at', normalizedDate);

      if (checkLogError) throw checkLogError;

      // If a log already exists, show duplicate warning
      if (existingLogs && existingLogs.length > 0) {
        setShowDuplicateWarning(true);
        setIsSubmitting(false);
        return;
      }

      // Create the hymn
      const { error: hymnError } = await supabase
        .from('Hymns')
        .insert([{
          id: hymnNumberInt,
          title: hymnTitle.trim(),
        }]);

      if (hymnError) throw hymnError;

      // Create the log entry
      const logData = {
        song_number: hymnNumberInt,
        logged_by: name.trim() || 'Anonymous',
        created_at: normalizedDate,
      };

      const { error: logError } = await supabase
        .from('Logs')
        .insert([logData]);

      if (logError) throw logError;

      // Call callback to refresh data
      if (onLogCreated) {
        onLogCreated();
      }

      // Close modal
      onClose();
    } catch (error) {
      console.error('Error creating hymn:', error);
      alert('Failed to create hymn. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleConfirmCreateHymnSubmit = async () => {
    setIsSubmitting(true);

    try {
      const normalizedDate = moment.utc(date).startOf('day').toISOString();

      // Check if hymn number already exists
      const { data: existingHymn, error: checkHymnError } = await supabase
        .from('Hymns')
        .select('id')
        .eq('id', parseInt(hymnNumber, 10))
        .single();

      if (checkHymnError && checkHymnError.code !== 'PGRST116') {
        throw checkHymnError;
      }

      if (existingHymn) {
        alert('A hymn with this number already exists. Please choose a different number.');
        setShowWarning(false);
        setIsSubmitting(false);
        return;
      }

      // Check if a log already exists for this hymn number on this date
      const { data: existingLogs, error: checkLogError } = await supabase
        .from('Logs')
        .select('id')
        .eq('song_number', parseInt(hymnNumber, 10))
        .eq('created_at', normalizedDate);

      if (checkLogError) throw checkLogError;

      // If a log already exists, show duplicate warning
      if (existingLogs && existingLogs.length > 0) {
        setShowDuplicateWarning(true);
        setShowWarning(false);
        setIsSubmitting(false);
        return;
      }

      // Create the hymn
      const { error: hymnError } = await supabase
        .from('Hymns')
        .insert([{
          id: parseInt(hymnNumber, 10),
          title: hymnTitle.trim(),
        }]);

      if (hymnError) throw hymnError;

      // Create the log entry
      const logData = {
        id: crypto.randomUUID(),
        song_number: parseInt(hymnNumber, 10),
        logged_by: name.trim() || 'Anonymous',
        created_at: normalizedDate,
      };

      const { error: logError } = await supabase
        .from('Logs')
        .insert([logData]);

      if (logError) throw logError;

      if (onLogCreated) {
        onLogCreated();
      }

      onClose();
    } catch (error) {
      console.error('Error creating hymn:', error);
      alert('Failed to create hymn. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedDateMoment = moment(date);
  const dayOfWeek = selectedDateMoment.day();
  const isSundayOrWednesday = dayOfWeek === 0 || dayOfWeek === 3;
  const pendingDateMoment = pendingDate ? moment(pendingDate) : null;

  return (
    <>
      <div className={`${styles.backdrop} ${isAnimating ? styles.open : ''}`} onClick={onClose} />
      <div ref={modalRef} className={`${styles.modal} ${isAnimating ? styles.open : ''}`}>
        {showDateConfirmation && pendingDateMoment && (
          <>
            <div className={styles.confirmationBackdrop} onClick={handleCancelDate} />
            <div className={styles.confirmationModal}>
              <h3>Confirm Date</h3>
              <p>
                Are you sure it was sang on {pendingDateMoment.format('dddd')}?
                ({pendingDateMoment.format('MMMM Do, YYYY')})
              </p>
              <div className={styles.confirmationActions}>
                <button
                  className={styles.confirmationCancelButton}
                  onClick={handleCancelDate}
                >
                  Cancel
                </button>
                <button
                  className={styles.confirmationConfirmButton}
                  onClick={handleConfirmDate}
                >
                  Yes
                </button>
              </div>
            </div>
          </>
        )}
        <div className={styles.modalHeader}>
          <div className={styles.headerContent}>
            {isCreatingHymn ? (
              <>
                <button className={styles.backButton} onClick={handleBackToSelection}>
                  <ChevronLeft size={24} />
                </button>
                <h1>Create New Hymn</h1>
              </>
            ) : selectedHymn ? (
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
          {isCreatingHymn ? (
            // Step 3: Create Hymn Form
            <div className={styles.loggingStep}>
              <div className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="hymnTitle">Hymn Name</label>
                  <div className={styles.inputContainer}>
                    <input
                      id="hymnTitle"
                      type="text"
                      value={hymnTitle}
                      onChange={(e) => setHymnTitle(e.target.value)}
                      placeholder="Enter hymn name"
                      className={styles.input}
                      style={{ paddingLeft: '0.75rem' }}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="hymnNumber">Hymn Number</label>
                  <div className={styles.inputContainer}>
                    <input
                      id="hymnNumber"
                      type="number"
                      value={hymnNumber}
                      onChange={(e) => setHymnNumber(e.target.value)}
                      placeholder="Enter hymn number"
                      className={styles.input}
                      style={{ paddingLeft: '0.75rem' }}
                      min="1"
                    />
                  </div>
                </div>

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
                  {!isSundayOrWednesday && date && (
                    <p className={styles.dateWarning}>
                      This is not a Sunday or Wednesday, but you may still log it.
                    </p>
                  )}
                </div>

                {showDuplicateWarning && (
                  <div className={styles.warning}>
                    <h3>Duplicate Log</h3>
                    <p>
                      This hymn was already logged for {selectedDateMoment.format('dddd, MMMM Do, YYYY')}.
                      Please select a different date or hymn.
                    </p>
                    <div className={styles.warningActions}>
                      <button
                        className={styles.warningButton}
                        onClick={() => setShowDuplicateWarning(false)}
                      >
                        OK
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
                    onClick={handleCreateHymnSubmit}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Creating...' : 'Create Hymn'}
                  </button>
                </div>
              </div>
            </div>
          ) : !selectedHymn ? (
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
              {isSuperAdmin && (
                <div className={styles.createHymnButtonContainer}>
                  <button
                    className={styles.createHymnButton}
                    onClick={handleCreateHymnClick}
                  >
                    Create New Hymn
                  </button>
                </div>
              )}
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
                  {!isSundayOrWednesday && date && (
                    <p className={styles.dateWarning}>
                      This is not a Sunday or Wednesday, but you may still log it.
                    </p>
                  )}
                </div>

                {showDuplicateWarning && (
                  <div className={styles.warning}>
                    <h3>Duplicate Log</h3>
                    <p>
                      This hymn was already logged for {selectedDateMoment.format('dddd, MMMM Do, YYYY')}.
                      Please select a different date or hymn.
                    </p>
                    <div className={styles.warningActions}>
                      <button
                        className={styles.warningButton}
                        onClick={() => setShowDuplicateWarning(false)}
                      >
                        OK
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
