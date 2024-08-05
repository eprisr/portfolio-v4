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
      {/* <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton /> */}
    </>
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
          {/* <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton /> */}
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
        {/* <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton /> */}
      </div>
      <div className={styles.dashboardTwo}>
        {/* <RevenueChartSkeleton />
        <LatestInvoicesSkeleton /> */}
      </div>
    </>
  );
}

export function TableRowSkeleton() {
  return (
    <tr
      className={`${styles.tableRowSkeleton} [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg`}
    >
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
    <div className="mb-2 w-full rounded-md bg-white p-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-8">
        <div className="flex items-center">
          <div className="mr-2 h-8 w-8 rounded-full bg-gray-100"></div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
        </div>
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
          <div className="mt-2 h-6 w-24 rounded bg-gray-100"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-10 w-10 rounded bg-gray-100"></div>
          <div className="h-10 w-10 rounded bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
}

export function InvoicesTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {/* <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton /> */}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Customer
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th
                  scope="col"
                  className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6"
                >
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {/* <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton /> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
