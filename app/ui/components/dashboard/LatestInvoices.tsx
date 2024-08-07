import React from 'react';
import Image from 'next/image';
import { TbRefresh } from 'react-icons/tb';
import { fetchLatestInvoices } from '@/app/lib/data';
import styles from './latestinvoices.module.css';

export default async function LatestInvoices() {
  const latestInvoices = await fetchLatestInvoices();

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Latest Invoices</h2>
      <div className={styles.list}>
        <div className="bg-white px-6">
          {latestInvoices.map((invoice, i) => {
            return (
              <div
                key={invoice.id}
                className={`${styles.invoice} ${i !== 0 && styles.borderTop}`}
              >
                <div className={styles.details}>
                  <Image
                    src={invoice.image_url}
                    alt={`${invoice.name}'s profile picture`}
                    className={styles.photo}
                    width={32}
                    height={32}
                  />
                  <div className={styles.customer}>
                    <p className={styles.customerName}>{invoice.name}</p>
                    <p className={styles.customerEmail}>{invoice.email}</p>
                  </div>
                </div>
                <p className={styles.amount}>{invoice.amount}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.updated}>
          <TbRefresh className={styles.refreshIcon} />
          <h3 className={styles.lastUpdated}>Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
