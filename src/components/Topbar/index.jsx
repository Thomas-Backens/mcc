'use client';

import styles from './index.module.css';
import { LogIn, LogOut, Music } from 'lucide-react';
import Searchbar from '../Searchbar';
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

const Topbar = ({ search, onSearchChange }) => {
  const [adminName, setAdminName] = useState(null);
  const { user, signOut } = useAuth();
  const router = useRouter();

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

        if (error && error.code !== 'PGRST116') { // PGRST116 is "no rows returned"
          console.error('Error fetching admin name:', error);
          setAdminName(user.email); // Fallback to email if error
          return;
        }

        setAdminName(data?.name || user.email); // Fallback to email if no name found
      } catch (error) {
        console.error('Error fetching admin name:', error);
        setAdminName(user.email); // Fallback to email on error
      }
    };

    fetchAdminName();
  }, [user]);

  const handleLoginClick = () => {
    router.push('/login');
  }

  const handleLogout = async () => {
    await signOut();
  }

  return (
    <div className={styles.topbar}>
      <div className={styles.mainContainer}>
        <div className={styles.logo}>
          <div className={styles.logoContainer}>
            <Music size={20} color={"var(--primary)"} />
          </div>
          <h1>MCC Hymns</h1>
        </div>
        <div className={styles.searchbarContainer}>
          <Searchbar value={search} placeholder="Search hymns" onChange={onSearchChange} />
        </div>
        <div className={styles.userContainer}>
          {user ? (
            <>
              <h3 className={styles.userName}>{adminName || user.email}</h3>
              <div className={styles.loginButton} onClick={handleLogout}>
                <LogOut size={20} color={"var(--primary)"} />
                <h2 className={styles.logoutText}>Logout</h2>
                <h2 className={styles.userNameText}>{adminName || user.email}</h2>
              </div>
            </>
          ) : (
            <div className={styles.loginButton} onClick={handleLoginClick}>
              <LogIn size={20} color={"var(--primary)"} />
              <h2>Login</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Topbar
