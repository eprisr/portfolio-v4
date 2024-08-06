import React from 'react';
import styles from './skeletons.module.css';

export function CardSkeleton() {
  return (
    <div className={`${styles.shimmer} ${styles.cardSkeleton}`}>
      <div className={styles.cardHeader}>
        <div className={styles.cardHeaderOne} />
        <div className={styles.cardHeaderTwo} />
      </div>
      <div className={styles.cardText}>
        <div className={styles.cardTextOne} />
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}

export function RevenueChartSkeleton() {
  return (
    <div className={`${styles.shimmer} ${styles.revenueChartSkeleton} `}>
      <div className={styles.revenueChart1} />
      <div className={styles.revenueChart2}>
        <div className={styles.revenueChart3} />
        <div className={styles.revenueChart4}>
          <div className={styles.revenueChart5} />
          <div className={styles.revenueChart6} />
        </div>
      </div>
    </div>
  );
}

export function InvoiceSkeleton() {
  return (
    <div className={styles.invoiceSkeleton}>
      <div className={styles.invoiceOne}>
        <div className={styles.invoiceTwo} />
        <div className={styles.invoiceThree}>
          <div className={styles.invoiceFour} />
          <div className={styles.invoiceFive} />
        </div>
      </div>
      <div className={styles.invoiceSix} />
    </div>
  );
}

export function LatestInvoicesSkeleton() {
  return (
    <div className={`${styles.shimmer} ${styles.latestInvoiceSkeleton}`}>
      <div className={styles.latestInvoiceOne} />
      <div className={styles.latestInvoiceTwo}>
        <div className={styles.latestInvoiceThree}>
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
        </div>
        <div className={styles.latestInvoiceFour}>
          <div className={styles.latestInvoiceFive} />
          <div className={styles.latestInvoiceSix} />
        </div>
      </div>
    </div>
  );
}

export default function DashboardSkeleton() {
  return (
    <>
      <div className={`${styles.shimmer} ${styles.dashboardSkeleton}`} />
      <div className={styles.dashboardOne}>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
      <div className={styles.dashboardTwo}>
        <RevenueChartSkeleton />
        <LatestInvoicesSkeleton />
      </div>
    </>
  );
}

export function TableRowSkeleton() {
  return (
    <tr className={styles.tableRowSkeleton}>
      {/* Customer Name and Image */}
      <td className={styles.tableRowOne}>
        <div className={styles.tableRowTwo}>
          <div className={styles.tableRowThree}></div>
          <div className={styles.tableRowFour}></div>
        </div>
      </td>
      {/* Email */}
      <td className={styles.tableRowFive}>
        <div className={styles.tableRowSix}></div>
      </td>
      {/* Amount */}
      <td className={styles.tableRowFive}>
        <div className={styles.tableRowSix}></div>
      </td>
      {/* Date */}
      <td className={styles.tableRowFive}>
        <div className={styles.tableRowSix}></div>
      </td>
      {/* Status */}
      <td className={styles.tableRowFive}>
        <div className={styles.tableRowSix}></div>
      </td>
      {/* Actions */}
      <td className={styles.tableRowSeven}>
        <div className={styles.tableRowEight}>
          <div className={styles.tableRowNine}></div>
          <div className={styles.tableRowNine}></div>
        </div>
      </td>
    </tr>
  );
}

export function InvoicesMobileSkeleton() {
  return (
    <div className={styles.invoiceMobileSkeleton}>
      <div className={styles.invoiceMobile5}>
        <div className={styles.invoiceMobile3}>
          <div className={styles.invoiceMobile1}></div>
          <div className={styles.invoiceMobile2}></div>
        </div>
        <div className={styles.invoiceMobile4}></div>
      </div>
      <div className={styles.invoiceMobile6}>
        <div>
          <div className={styles.invoiceMobile8}></div>
          <div className={styles.invoiceMobile9}></div>
        </div>
        <div className={styles.invoiceMobile10}>
          <div className={styles.invoiceMobile11}></div>
          <div className={styles.invoiceMobile12}></div>
        </div>
      </div>
    </div>
  );
}

export function InvoicesTableSkeleton() {
  return (
    <div className={styles.invoicesTableSkeleton}>
      <div className={styles.invoicesTable1}>
        <div className={styles.invoicesTable2}>
          <div className={styles.invoicesTable3}>
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
          </div>
          <table>
            <thead>
              <tr>
                <th scope="col" className={styles.th1}>
                  Customer
                </th>
                <th scope="col" className={styles.th2}>
                  Email
                </th>
                <th scope="col" className={styles.th2}>
                  Amount
                </th>
                <th scope="col" className={styles.th2}>
                  Date
                </th>
                <th scope="col" className={styles.th2}>
                  Status
                </th>
                <th scope="col" className={styles.th3}>
                  <span>Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
