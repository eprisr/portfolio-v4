import React from 'react'
import Filter from '../../components/Projects/Filter'
import styles from './projectswrapper.module.css'

export default function ProjectsWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className={styles.projects}>
      <div className={`${styles.container} container`}>
        <Filter />
        {children}
      </div>
    </section>
  )
}
