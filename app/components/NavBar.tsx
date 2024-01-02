import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import NavText from './base/Typography/NavText'
import styles from './navbar.module.css'

// eslint-disable-next-line
// @ts-ignore
const Switch = dynamic(() => import('./base/Switch.tsx'), {
  ssr: false,
})

export default function NavBar() {
  const navItems = ['About', 'Work', 'Contact']

  return (
    <nav className={styles.nav}>
      <div className={`${styles.container} container`} id="container">
        <Link className={styles.logoName} href="/">
          <svg
            id={styles.logo}
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 71.14 114.07">
            <path
              className={styles.logo_path}
              d="M43.34,9.02l-8.54,15.39c-.72,1.21-1.21,2.42-.08,3.39.81.81,2.34.65,3.55.08l14.26-10.8c4.67-2.9,7.41-5.64,7.89-9.43.57-3.46-1.77-7.09-6.04-7.57-4.99-.65-7.97,3.06-11.04,8.94ZM71.05,65.01c0-17.89-12.48-30.29-32.3-30.29C14.82,34.71,0,52.11,0,75.72s15.55,38.35,38.34,38.35c18.37,0,31.82-10.8,32.79-24.09,0-1.77-.57-3.22-2.1-3.22-1.13,0-1.93.65-3.3,2.42-3.22,7.82-11.52,12.97-22.15,12.97-15.79,0-26.67-10.07-27.8-29.41h46.57c5.64,0,8.7-2.66,8.7-7.73ZM36.49,41.16c10.47,0,17.16,8.54,17.16,22.8,0,2.42-1.29,3.55-4.03,3.55H15.79c.65-16.03,8.94-26.34,20.71-26.34Z"
            />
          </svg>
          <span className={styles.eprisRichardson}>Epris Richardson</span>
        </Link>
        <div className={styles.navItems}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <NavText key={item} item={item} />
            ))}
          </ul>
          {/* <Switch /> */}
        </div>
      </div>
    </nav>
  )
}
