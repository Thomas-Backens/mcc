'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import styles from './index.module.css';
import { Plus } from 'lucide-react';
import AddHymnModal from './AddHymnModal';

const AddHymnButton = ({ onLogCreated, selectedHymn }) => {
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!user) {
    return null;
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLogCreated = () => {
    if (onLogCreated) {
      onLogCreated();
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.addHymnButton} onClick={handleOpenModal}>
          <Plus color={"var(--background)"} size={36} strokeWidth={2} />
        </div>
      </div>
      <AddHymnModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onLogCreated={handleLogCreated}
        initialHymn={selectedHymn}
      />
    </>
  )
}

export default AddHymnButton
