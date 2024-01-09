import React from 'react'
import styles from './desclist.module.css'
import { Project } from '../../lib/definitions'

export default function DescList({ project }: { project: Project }) {
  return (
    <dl className={styles.desc_list}>
      {Object.keys(project.skills).map((term) => (
        <div>
          <dt className={styles.desc_term}>{term}</dt>
          <dd className={styles.desc_desc}>
            {project.skills[term].join(', ')}
          </dd>
        </div>
      ))}
    </dl>
  )
}
