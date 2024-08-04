import React from 'react';
import Filter from '@/app/ui/components/projects/Filter';
import styles from './projectswrapper.module.css';

export default function ProjectsWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={styles.projects}>
      <div className={`${styles.container} container`}>{children}</div>
    </section>
  );
}
