import React from 'react'
import Button from '../../components/base/Button'
import styles from './role.module.css'
import Image from 'next/image'

function Role() {
  return (
    <section className={styles.role}>
      <div className={` ${styles.container} container `}>
        <div className={` ${styles.left_column} column `}>
          <Image
            src="/assets/images/lucca_mockup.png"
            alt=""
            className={styles.lucca}
            width="541"
            height="489"
          />
        </div>
        <div className={` ${styles.right_column} column `}>
          <h5 className="sub1">Defining my role</h5>
          <h2 className="display3">Adding Value to Your Business</h2>
          <p>
            Innovative design and seamless functionality captivate audiences,
            drive conversions, and boost brand visibility. By delivering unique
            online experiences, I help businesses stand out, foster customer
            loyalty, and accelerate digital growth.
          </p>
          <Button
            href="/about#role_and_contributions"
            variant="solid"
            colorScheme="accent1">
            Discover my impact
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Role
