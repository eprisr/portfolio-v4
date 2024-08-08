import React from 'react';
import Navbar from '@/app/ui/components/dashboard/Navbar';
import Sidebar from '@/app/ui/components/dashboard/Sidebar';
import styles from './layout.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Navbar />
      </div>
      <nav className={styles.nav}>
        <Sidebar />
      </nav>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
