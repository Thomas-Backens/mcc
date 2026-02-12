'use client';

import { useState, useEffect } from 'react';
import styles from './index.module.css';
import Dropdown from '../Dropdown';
import HymnCard from './HymnCard';
import HymnDetailModal from './HymnDetailModal';
import Searchbar from '../Searchbar';
import { supabase } from '@/lib/supabase';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import moment from 'moment';

const HymnsList = ({ search, onSearchChange, refreshKey, selectedHymn, setSelectedHymn, onLogDeleted }) => {
  const [hymns, setHymns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('number-low-high');
  const [currentPage, setCurrentPage] = useState(1);
  const [adminData, setAdminData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemsPerPage = 25;
  const { user } = useAuth();

  useEffect(() => {
    const fetchAdminData = async () => {
      if (!user) {
        setAdminData(null);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('Admins')
          .select('is_super_admin')
          .eq('id', user.id)
          .single();

        if (error && error.code !== 'PGRST116') { // PGRST116 is "no rows returned"
          console.error('Error fetching admin data:', error);
          return;
        }

        setAdminData(data);
      } catch (error) {
        console.error('Error fetching admin data:', error);
      }
    };

    fetchAdminData();
  }, [user]);

  useEffect(() => {
    const fetchHymns = async () => {
      try {
        // Fetch all hymns
        const { data: hymnsData, error: hymnsError } = await supabase
          .from('Hymns')
          .select('*')
          .order('id', { ascending: true });

        if (hymnsError) throw hymnsError;

        // Fetch all logs using pagination
        let logsData = [];
        let from = 0;
        const batchSize = 1000;
        let hasMore = true;

        while (hasMore) {
          const { data: pageData, error: logsError } = await supabase
            .from('Logs')
            .select('*')
            .range(from, from + batchSize - 1);

          if (logsError) throw logsError;

          if (pageData && pageData.length > 0) {
            logsData = [...logsData, ...pageData];
            from += batchSize;
            hasMore = pageData.length === batchSize;
          } else {
            hasMore = false;
          }
        }

        // Match logs to hymns where log.song_number = hymn.id
        const hymnsWithLogs = hymnsData.map(hymn => {
          const logHistory = logsData
            .filter(log => log.song_number === hymn.id)
            .map(log => ({
              id: log.id,
              song_number: log.song_number,
              created_at: log.created_at,
              logged_by: log.logged_by || 'Anonymous',
            }))
            // Sort by most recent first (newest to oldest)
            .sort((a, b) => moment.utc(b.created_at) - moment.utc(a.created_at));

          // Calculate lastSang from logHistory (most recent log is now first)
          const lastSang = logHistory.length > 0 ? logHistory[0]?.created_at || null : null;

          return {
            id: hymn.id,
            title: hymn.title,
            logHistory,
            lastSang,
          };
        });

        setHymns(hymnsWithLogs);
      } catch (error) {
        console.error('Error fetching hymns:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHymns();
  }, [refreshKey]);

  const sortOptions = [
    { value: 'number-low-high', label: 'Song Number (Low to High)' },
    { value: 'number-high-low', label: 'Song Number (High to Low)' },
    { value: 'title-a-z', label: 'Song Title (A to Z)' },
    { value: 'title-z-a', label: 'Song Title (Z to A)' },
    { value: 'most-sang', label: 'Most Sang' },
    { value: 'least-sang', label: 'Least Sang' },
    { value: 'recently-sang-newest', label: 'Recently sang (New to Old)' },
    { value: 'recently-sang-oldest', label: 'Recently sang (Old to New)' },
  ];

  // Apply search filter
  const filteredHymns = hymns.filter(hymn => {
    if (!search) return true;
    const searchLower = search.toLowerCase();
    return (
      hymn.title.toLowerCase().includes(searchLower) ||
      hymn.id.toString().includes(searchLower)
    );
  });

  // Apply sorting
  const sortedHymns = [...filteredHymns].sort((a, b) => {
    switch (sortBy) {
      case 'number-low-high':
        return a.id - b.id;
      case 'number-high-low':
        return b.id - a.id;
      case 'title-a-z':
        return a.title.localeCompare(b.title);
      case 'title-z-a':
        return b.title.localeCompare(a.title);
      case 'most-sang':
        return b.logHistory.length - a.logHistory.length;
      case 'least-sang':
        return a.logHistory.length - b.logHistory.length;
      case 'recently-sang-newest':
        // Newest to Oldest: most recent first, nulls at the end
        if (!a.lastSang && !b.lastSang) return 0;
        if (!a.lastSang) return 1;
        if (!b.lastSang) return -1;
        return moment.utc(b.lastSang) - moment.utc(a.lastSang);
      case 'recently-sang-oldest':
        // Oldest to Newest: oldest first, nulls at the end
        if (!a.lastSang && !b.lastSang) return 0;
        if (!a.lastSang) return 1;
        if (!b.lastSang) return -1;
        return moment.utc(a.lastSang) - moment.utc(b.lastSang);
      default:
        return 0;
    }
  });

  // Calculate pagination
  const totalPages = Math.ceil(sortedHymns.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentHymns = sortedHymns.slice(startIndex, endIndex);

  // Reset to page 1 when sort or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [sortBy, search]);

  // Update selectedHymn when hymns are refetched (e.g., after a log is created)
  useEffect(() => {
    if (selectedHymn && hymns.length > 0) {
      const updatedHymn = hymns.find(h => h.id === selectedHymn.id);
      if (updatedHymn) {
        // Only update if the logHistory has actually changed
        const logCountChanged = updatedHymn.logHistory.length !== (selectedHymn.logHistory?.length || 0);
        if (logCountChanged || updatedHymn.lastSang !== selectedHymn.lastSang) {
          setSelectedHymn(updatedHymn);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hymns]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleHymnClick = (hymn) => {
    setSelectedHymn(hymn);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Delay clearing selectedHymn to allow closing animation to complete
    setTimeout(() => {
      setSelectedHymn(null);
    }, 300); // Match the CSS transition duration
  };

  if (loading) {
    return (
      <div className={styles.hymnsList}>
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <h2>Loading hymns...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.hymnsList}>
      <div className={styles.mobileSearchContainer}>
        <div className={styles.mobileSearchbar}>
          <Searchbar value={search} placeholder="Search hymns" onChange={onSearchChange} />
        </div>
        <div className={styles.mobileDropdown}>
          <Dropdown
            value={sortBy}
            options={sortOptions}
            onChange={setSortBy}
            placeholder="Select sort option"
            className={styles.fullWidthDropdown}
          />
        </div>
      </div>
      <div className={styles.desktopFilters}>
        <div className={styles.filters}>
          <div className={styles.hymnCount}>
            <h2>{hymns.length} hymns</h2>
            {user && (
              <div className={styles.adminPill}>
                <h2>{adminData?.is_super_admin ? 'Super Admin' : 'Admin'}</h2>
              </div>
            )}
          </div>
          <div className={styles.desktopDropdown}>
            <Dropdown
              value={sortBy}
              options={sortOptions}
              onChange={setSortBy}
              placeholder="Select sort option"
            />
          </div>
        </div>
      </div>
      <div className={styles.desktopContentContainer}>
        <div className={styles.hymns}>
          {currentHymns.map((hymn) => (
            <HymnCard key={hymn.id} hymn={hymn} onClick={() => handleHymnClick(hymn)} />
          ))}
        </div>
      </div>
      <div className={styles.mobileContentContainer}>
        <div className={styles.filters}>
          <div className={styles.hymnCount}>
            <h2>{hymns.length} hymns</h2>
            {user && (
              <div className={styles.adminPill}>
                <h2>{adminData?.is_super_admin ? 'Super Admin' : 'Admin'}</h2>
              </div>
            )}
          </div>
        </div>
        <div className={styles.hymns}>
          {currentHymns.map((hymn) => (
            <HymnCard key={hymn.id} hymn={hymn} onClick={() => handleHymnClick(hymn)} />
          ))}
        </div>
      </div>
      <HymnDetailModal
        hymn={selectedHymn}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        isSuperAdmin={adminData?.is_super_admin || false}
        onLogDeleted={onLogDeleted}
      />
      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            className={styles.paginationButton}
            style={{ paddingLeft: '0.5rem' }}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft size={20} />
            Previous
          </button>
          <div className={styles.pageInfo}>
            Page {currentPage} of {totalPages}
          </div>
          <button
            className={styles.paginationButton}
            style={{ paddingRight: '0.5rem' }}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default HymnsList;
