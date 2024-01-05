import React from 'react'
import styles from './skeletons.module.css'

export function ProjectsSkeleton() {
  return (
    <section className={styles.projects}>
      <div className={`${styles.container} container`}>
        <div className={styles.proj_container}>
          <div className={`${styles.project} ${styles.reverse}`}>
            <div className={styles.proj_image} />
            <div className={styles.info}>
              <div className={`${styles.title} lead_para`} />
              <div className={styles.desc} />
              <div className={styles.tech_stack}>
                <div className={styles.skill} />
              </div>
            </div>
          </div>
          <div className={`${styles.project}`}>
            <div className={styles.proj_image} />
            <div className={styles.info}>
              <div className={`${styles.title} lead_para`} />
              <div className={styles.desc} />
              <div className={styles.tech_stack}>
                <div className={styles.skill} />
              </div>
            </div>
          </div>
          <div className={`${styles.project} ${styles.reverse}`}>
            <div className={styles.proj_image} />
            <div className={styles.info}>
              <div className={`${styles.title} lead_para`} />
              <div className={styles.desc} />
              <div className={styles.tech_stack}>
                <div className={styles.skill} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
