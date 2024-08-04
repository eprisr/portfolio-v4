import React from 'react';
import { Project } from '@/app/lib/definitions';
import styles from './desclist.module.css';

export default function DescList({ project }: { project: Project }) {
  const { skills } = project;

  return (
    <dl className={styles.desc_list}>
      {Object.keys(skills).map((term) => (
        <div>
          <dt className={styles.desc_term}>{term}</dt>
          <dd className={styles.desc_desc}>{skills[term].join(', ')}</dd>
        </div>
      ))}
    </dl>
  );
}
