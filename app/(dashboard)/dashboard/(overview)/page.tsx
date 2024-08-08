import React, { Suspense } from 'react';
import CardWrapper from '@/app/ui/components/dashboard/Cards';
import LatestInvoices from '@/app/ui/components/dashboard/LatestInvoices';
import { CardsSkeleton, LatestInvoicesSkeleton } from '@/app/ui/skeletons';
import styles from './dashboard.module.css';

export default async function Dashboard() {
  return (
    <div>
      <h1 className={styles.dashboardTitle}>DASHBOARD</h1>
      {/* <div className={styles.cardGroup}>
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className={styles.menu}>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div> */}
    </div>
  );
}
