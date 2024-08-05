import React from 'react';
import { TbCashBanknote, TbClockHour1, TbInbox, TbUsers } from 'react-icons/tb';
import { fetchCardData } from '@/app/lib/data';
import styles from './cards.module.css';

const iconMap = {
  collected: TbCashBanknote,
  customers: TbUsers,
  pending: TbClockHour1,
  invoices: TbInbox,
};

export default async function CardWrapper() {
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <>
      <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.iconWrapper}>
        {Icon ? <Icon className={styles.icon} /> : null}
        <h3 className={styles.iconTitle}>{title}</h3>
      </div>
      <p className={styles.value}>{value}</p>
    </div>
  );
}
