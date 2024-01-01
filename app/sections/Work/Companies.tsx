import React from 'react'
import styles from './companies.module.css'
import Image from 'next/image'

type Props = {}

export default function Companies({}: Props) {
  return (
    <section className={styles.companies}>
      <div className={`${styles.container} container`}>
        <h2>Companies I've Worked With</h2>
        <div className={styles.logos}>
          <Image
            src="/assets/images/logos/palace-logo-black.png"
            alt=""
            className={styles.palace}
            width="530"
            height="175"
          />
          <Image
            src="/assets/images/logos/continental-logo-black.png"
            alt=""
            className={styles.continental}
            width="925"
            height="99"
          />
          <Image
            src="/assets/images/logos/bradley-logo-black.png"
            alt=""
            className={styles.bradley}
            width="1477"
            height="301"
          />
          <Image
            src="/assets/images/logos/brooks-logo-black.png"
            alt=""
            className={styles.brooks}
            width="628"
            height="152"
          />
          <Image
            src="/assets/images/logos/weco-logo-horizontal-black.png"
            alt=""
            className={styles.weco}
            width="797"
            height="85"
          />
        </div>
      </div>
    </section>
  )
}
