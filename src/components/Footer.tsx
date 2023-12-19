import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import styles from './footer.module.css'

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.icons}>
          <FaGithub />
          <FaLinkedin />
        </div>
        <p>All rights reserved.</p>
        <p>
          Designed in Figma. Built with love in Next.js. Deployed in Varcel.
        </p>
      </div>
    </footer>
  )
}
