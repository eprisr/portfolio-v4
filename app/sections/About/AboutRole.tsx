import React from 'react'
import styles from './aboutrole.module.css'

export default function AboutRole() {
  return (
    <section id="role_and_contributions" className={styles.role}>
      <div className={`${styles.container} container `}>
        <div className={styles.contributions}>
          <h5 className="sub1">What I do</h5>
          <h2>My Role & Contributions</h2>
          <p>
            As a software engineer, I add value to businesses by crafting unique
            and user-friendly websites. I understand the importance of an
            influential online presence in today's digital era.
          </p>
          <p>
            By creating visually stunning designs, optimizing website
            performance, and integrating seamless user experiences, I help
            businesses stand out from the competition and attract more
            customers. With expertise in responsive design and mobile
            optimization, I ensure clients' websites are accessible and engaging
            across all devices, enhancing their reach and impact.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <p className={styles.stat_num}>11</p>
              <p className={styles.stat_desc}>Years Total Experience</p>
            </div>
            <div className={styles.stat}>
              <p className={styles.stat_num}>1</p>
              <p className={styles.stat_desc}>Co-Founded Business</p>
            </div>
            <div className={styles.stat}>
              <p className={styles.stat_num}>5</p>
              <p className={styles.stat_desc}>Companies Worked For</p>
            </div>
          </div>
        </div>
        <div className={styles.chevron_bg}></div>
      </div>
    </section>
  )
}
