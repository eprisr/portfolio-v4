import React from 'react';
import SideNav from '@/app/ui/components/dashboard/SideNav';
import styles from './layout.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.sidebarWrapper}>
      <div className={styles.sidebarContainer}>
        <SideNav />
      </div>
      <div className={styles.sidebarChildren}>{children}</div>
    </div>
  );
}
