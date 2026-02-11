'use client';

import { useState } from 'react';
import styles from "./page.module.css";
import HymnsList from "@/components/HymnsList";
import Topbar from "@/components/Topbar";
import AddHymnButton from "@/components/AddHymnButton";

export default function Home() {
  const [search, setSearch] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);
  const [selectedHymn, setSelectedHymn] = useState(null);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleLogCreated = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div className={styles.page}>
      <Topbar search={search} onSearchChange={handleSearchChange} />
      <HymnsList
        search={search}
        onSearchChange={handleSearchChange}
        refreshKey={refreshKey}
        selectedHymn={selectedHymn}
        setSelectedHymn={setSelectedHymn}
        onLogDeleted={handleLogCreated}
      />
      <AddHymnButton onLogCreated={handleLogCreated} selectedHymn={selectedHymn} />
    </div>
  );
}
