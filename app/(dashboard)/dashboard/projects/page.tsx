import React, { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import styles from './projects.module.css';

function page() {
  return (
    <section className={styles.projects}>
      <div>
        <h1>PROJECTS</h1>
      </div>
      <div className="container">{/* <CreateInvoice /> */}</div>
      <Suspense fallback={<InvoicesTableSkeleton />}>
        {/* <Table /> */}
      </Suspense>
    </section>
  );
}

export default page;
