import React from 'react'
import styles from './companies.module.css'
import Image from 'next/image'

export default function Companies() {
  return (
    <section className={styles.companies}>
      <div className={`${styles.container} container`}>
				<h2>Companies I've Worked With</h2>
				{/* TODO: Link out to each individual website */}
        <div className={styles.logos}>
          <Image
            src="/assets/images/logos/palace-logo.png"
            alt=""
            className={`${styles.palace} ${styles.imgDark}`}
            width="530"
            height="175"
          />
          <Image
            src="/assets/images/logos/palace-logo-black.png"
            alt=""
            className={`${styles.palace} ${styles.imgLight}`}
            width="530"
            height="175"
          />
          <Image
            src="/assets/images/logos/continental-logo.png"
            alt=""
            className={`${styles.continental} ${styles.imgDark}`}
            width="925"
            height="99"
          />
          <Image
            src="/assets/images/logos/continental-logo-black.png"
            alt=""
            className={`${styles.continental} ${styles.imgLight}`}
            width="925"
            height="99"
          />
          <Image
            src="/assets/images/logos/bradley-logo.png"
            alt=""
            className={`${styles.bradley} ${styles.imgDark}`}
            width="1477"
            height="301"
          />
          <Image
            src="/assets/images/logos/bradley-logo-black.png"
            alt=""
            className={`${styles.bradley} ${styles.imgLight}`}
            width="1477"
            height="301"
          />
          <Image
            src="/assets/images/logos/brooks-logo.png"
            alt=""
            className={`${styles.brooks} ${styles.imgDark}`}
            width="628"
            height="152"
          />
          <Image
            src="/assets/images/logos/brooks-logo-black.png"
            alt=""
            className={`${styles.brooks} ${styles.imgLight}`}
            width="628"
            height="152"
          />
          <Image
            src="/assets/images/logos/weco-logo-horizontal.png"
            alt=""
            className={`${styles.weco} ${styles.imgDark}`}
            width="797"
            height="85"
          />
          <Image
            src="/assets/images/logos/weco-logo-horizontal-black.png"
            alt=""
            className={`${styles.weco} ${styles.imgLight}`}
            width="797"
            height="85"
          />
        </div>
      </div>
    </section>
  )
}
