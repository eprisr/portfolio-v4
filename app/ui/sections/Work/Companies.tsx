import React from 'react'
import styles from './companies.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Companies() {
  return (
    <section className={styles.companies}>
      <div className={`${styles.container} container`}>
        <h2>Companies I've Worked With</h2>
        <div className={styles.logos}>
          <Link href="https://www.313presents.com/" target="_blank">
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
          </Link>
          <Link href="https://www.continentalserves.com/" target="_blank">
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
          </Link>
          <Link href="https://www.thebradco.com/" target="_blank">
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
          </Link>
          {/* TODO: Change to BHC logo */}
          <Link href="https://becoholdingcompany.com/" target="_blank">
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
          </Link>
          <Link href="https://wecohospitality.com/" target="_blank">
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
          </Link>
        </div>
      </div>
    </section>
  )
}
