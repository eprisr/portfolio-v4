import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TbAdjustmentsHorizontal, TbSearch, TbSettings } from 'react-icons/tb';
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.title}>
          <Link className={styles.logoName} href="/dashboard">
            <svg
              id={styles.logo}
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 71.14 114.07"
            >
              <path
                className={styles.logo_path}
                d="M43.34,9.02l-8.54,15.39c-.72,1.21-1.21,2.42-.08,3.39.81.81,2.34.65,3.55.08l14.26-10.8c4.67-2.9,7.41-5.64,7.89-9.43.57-3.46-1.77-7.09-6.04-7.57-4.99-.65-7.97,3.06-11.04,8.94ZM71.05,65.01c0-17.89-12.48-30.29-32.3-30.29C14.82,34.71,0,52.11,0,75.72s15.55,38.35,38.34,38.35c18.37,0,31.82-10.8,32.79-24.09,0-1.77-.57-3.22-2.1-3.22-1.13,0-1.93.65-3.3,2.42-3.22,7.82-11.52,12.97-22.15,12.97-15.79,0-26.67-10.07-27.8-29.41h46.57c5.64,0,8.7-2.66,8.7-7.73ZM36.49,41.16c10.47,0,17.16,8.54,17.16,22.8,0,2.42-1.29,3.55-4.03,3.55H15.79c.65-16.03,8.94-26.34,20.71-26.34Z"
              />
            </svg>
          </Link>
        </div>
        <div className={styles.searchMobile}>
          <TbSearch />
        </div>
        <div className={styles.search}>
          <div className={styles.searchContainer}>
            <div className={styles.searchIcon}>
              <span className="noWidth"></span>
              <TbSearch />
            </div>
            <input type="text" placeholder="search" aria-label="search" />
            <div className={styles.searchSettings}>
              <TbAdjustmentsHorizontal />
            </div>
            <fieldset></fieldset>
          </div>
        </div>
        <div className={styles.empty}></div>
        <div className={styles.empty}></div>
        <div className={styles.profile}>
          <div className={styles.imageWrapper}>
            <Image
              src="/assets/images/portrait_2.jpg"
              alt="profile photo"
              width="64"
              height="86"
            />
          </div>
          <TbSettings />
        </div>
      </div>
    </>
  );
}
