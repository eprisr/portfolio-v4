import React, { Suspense } from 'react';
import CardWrapper from '@/app/ui/components/dashboard/Cards';
import LatestInvoices from '@/app/ui/components/dashboard/LatestInvoices';
import { CardsSkeleton, LatestInvoicesSkeleton } from '@/app/ui/skeletons';
import styles from './dashboard.module.css';

export default async function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <h1 className={styles.dashboardTitle}>Dashboard</h1>
      <div className={styles.cardGroup}>
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className={styles.menu}></div>
    </div>
  );
}
