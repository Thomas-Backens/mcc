'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './index.module.css';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import moment from 'moment';

const DatePicker = ({ value, onChange, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(moment(value || moment()));
  const containerRef = useRef(null);

  // Close calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen]);

  // Update current month when value changes
  useEffect(() => {
    if (value) {
      setCurrentMonth(moment(value));
    }
  }, [value]);

  const selectedDate = value ? moment(value) : null;
  const today = moment();

  // Get days in current month view
  const startOfMonth = currentMonth.clone().startOf('month');
  const endOfMonth = currentMonth.clone().endOf('month');
  const startOfCalendar = startOfMonth.clone().startOf('week');
  const endOfCalendar = endOfMonth.clone().endOf('week');

  const days = [];
  let day = startOfCalendar.clone();
  while (day.isSameOrBefore(endOfCalendar, 'day')) {
    days.push(day.clone());
    day.add(1, 'day');
  }

  const handleDateSelect = (date) => {
    onChange({ target: { value: date.format('YYYY-MM-DD') } });
    setIsOpen(false);
  };

  const handlePreviousMonth = () => {
    setCurrentMonth(currentMonth.clone().subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentMonth(currentMonth.clone().add(1, 'month'));
  };

  const handleToday = () => {
    const todayMoment = moment();
    setCurrentMonth(todayMoment);
    handleDateSelect(todayMoment);
  };

  const isSelected = (day) => {
    return selectedDate && day.isSame(selectedDate, 'day');
  };

  const isToday = (day) => {
    return day.isSame(today, 'day');
  };

  const isCurrentMonth = (day) => {
    return day.isSame(currentMonth, 'month');
  };

  const displayValue = selectedDate ? selectedDate.format('MMM DD, YYYY') : 'Select date';

  return (
    <div ref={containerRef} className={`${styles.datePicker} ${className || ''}`}>
      <button
        type="button"
        className={`${styles.dateInput} ${selectedDate ? styles.dateInputFilled : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Calendar className={styles.calendarIcon} size={20} color="var(--light-grey)" />
        <span>{displayValue}</span>
      </button>

      {isOpen && (
        <div className={styles.calendar}>
          <div className={styles.calendarHeader}>
            <button
              type="button"
              className={styles.navButton}
              onClick={handlePreviousMonth}
            >
              <ChevronLeft size={20} />
            </button>
            <h2 className={styles.monthYear}>
              {currentMonth.format('MMMM YYYY')}
            </h2>
            <button
              type="button"
              className={styles.navButton}
              onClick={handleNextMonth}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className={styles.weekdays}>
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day, index) => (
              <div key={index} className={styles.weekday}>
                {day}
              </div>
            ))}
          </div>

          <div className={styles.days}>
            {days.map((day, index) => {
              const dayClasses = [
                styles.day,
                !isCurrentMonth(day) ? styles.otherMonth : '',
                isToday(day) ? styles.today : '',
                isSelected(day) ? styles.selected : '',
              ].filter(Boolean).join(' ');

              return (
                <button
                  key={index}
                  type="button"
                  className={dayClasses}
                  onClick={() => handleDateSelect(day)}
                  disabled={!isCurrentMonth(day)}
                >
                  {day.format('D')}
                </button>
              );
            })}
          </div>

          <div className={styles.calendarFooter}>
            <button
              type="button"
              className={styles.todayButton}
              onClick={handleToday}
            >
              Today
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
