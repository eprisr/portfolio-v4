import React from 'react';
import Navbar from '@/app/ui/components/dashboard/Navbar';
import Sidebar from '@/app/ui/components/dashboard/Sidebar';
import styles from './layout.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.sidebarWrapper}>
      <div className={styles.sidebarHeader}>
        <Navbar />
      </div>
      <nav className={styles.sidebarNav}>
        <Sidebar />
      </nav>
      <div className={styles.sidebarContent}>{children}</div>
    </div>
  );
}
