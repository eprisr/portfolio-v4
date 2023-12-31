import React from 'react'
import styles from './companies.module.css'
import Palace from '../../assets/images/logos/palace-logo-black.png'
import Continental from '../../assets/images/logos/continental-logo-black.png'
import Bradley from '../../assets/images/logos/bradley-logo-black.png'
import Brooks from '../../assets/images/logos/brooks-logo-black.png'
import WECO from '../../assets/images/logos/weco-logo-horizontal-black.png'

type Props = {}

export default function Companies({}: Props) {
  return (
    <section className={styles.companies}>
      <div className={`${styles.container} container`}>
        <h2>Companies I've Worked With</h2>
        <div className={styles.logos}>
          <img src={Palace} alt="" className={styles.palace} />
          <img src={Continental} alt="" className={styles.continental} />
          <img src={Bradley} alt="" className={styles.bradley} />
          <img src={Brooks} alt="" className={styles.brooks} />
          <img src={WECO} alt="" className={styles.weco} />
        </div>
      </div>
    </section>
  )
}
