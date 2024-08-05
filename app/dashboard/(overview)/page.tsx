import React from 'react';
import { fetchCardData, fetchLatestInvoices } from '@/app/lib/data';
import { Card } from '@/app/ui/components/dashboard/Cards';
import LatestInvoices from '@/app/ui/components/dashboard/LatestInvoices';
import styles from './dashboard.module.css';

export default async function Dashboard() {
  const latestInvoices = await fetchLatestInvoices();
  const {
    totalPaidInvoices,
    totalPendingInvoices,
    numberOfInvoices,
    numberOfCustomers,
  } = await fetchCardData();

  return (
    <div>
      <h1 className={styles.dashboardTitle}>DASHBOARD</h1>
      <div className={styles.cardGroup}>
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
      <div className={styles.menu}>
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </div>
  );
}
