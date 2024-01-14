import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import styles from './footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.icons}>
          <Link href="https://github.com/eprisr" target="_blank">
            <FaGithub className={styles.icon} />
          </Link>
          <Link href="https://linkedin.com/in/eprishb" target="_blank">
            <FaLinkedin className={styles.icon} />
          </Link>
        </div>
        <p>All rights reserved.</p>
        <p>
          Designed in Figma. Built with love in Next.js. Deployed in Vercel.
        </p>
      </div>
    </footer>
  )
}
