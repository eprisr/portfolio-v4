import React, { Suspense } from 'react';
import { TbPlus } from 'react-icons/tb';
import { Button, LinkButton } from '@/app/ui/components/base/Button';
import Table from '@/app/ui/components/invoices/Table';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import styles from './invoices.module.css';

function page() {
  return (
    <section className={styles.invoices}>
      <div>
        <h1>INVOICES</h1>
      </div>
      <div className="container">
        <Button colorScheme="madder" variant="outline">
          <LinkButton href="/dashboard/invoices/create">
            Create Invoice <TbPlus />
          </LinkButton>
        </Button>
      </div>
      <Suspense fallback={<InvoicesTableSkeleton />}>
        <Table query={''} currentPage={1} />
      </Suspense>
    </section>
  );
}

export default page;
