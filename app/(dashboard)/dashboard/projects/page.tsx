import React, { Suspense } from 'react';
import { TbPlus } from 'react-icons/tb';
import { Button, LinkButton } from '@/app/ui/components/base/Button';
import Table from '@/app/ui/components/dash-projects/Table';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import styles from './projects.module.css';

function page() {
  return (
    <section className={styles.projects}>
      <div className={styles.titleBar}>
        <div>
          <h1>Projects</h1>
        </div>
        <div className={styles.buttonContainer}>
          <Button colorScheme="madder" variant="outline">
            <LinkButton href="/dashboard/projects/create">
              Create Project <TbPlus />
            </LinkButton>
          </Button>
        </div>
      </div>
      <Suspense fallback={<InvoicesTableSkeleton />}>
        <Table query={''} currentPage={1} />
      </Suspense>
    </section>
  );
}

export default page;
