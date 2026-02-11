'use client';

import { useState, useRef, useEffect } from 'react';
import styles from "./index.module.css";
import { ArrowUpDown, ChevronDown } from "lucide-react";

const Dropdown = ({ value, options, onChange, placeholder, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const selectedOption = options.find(opt => opt.value === value) || options[0];

  return (
    <div className={`${styles.dropdown} ${className || ''}`} ref={dropdownRef}>
      <ArrowUpDown className={styles.dropdownIcon} size={20} color={"var(--light-grey)"} />
      <button
        className={`${styles.dropdownButton} ${isOpen ? styles.dropdownButtonOpen : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.dropdownValue}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={`${styles.chevronIcon} ${isOpen ? styles.chevronOpen : ''}`}
          size={20}
          color={"var(--light-grey)"}
        />
      </button>
      {isOpen && (
        <div className={styles.dropdownOptions}>
          {options.map((option) => (
            <div
              key={option.value}
              className={`${styles.dropdownOption} ${value === option.value ? styles.dropdownOptionActive : ''}`}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              <h3>{option.label}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown
