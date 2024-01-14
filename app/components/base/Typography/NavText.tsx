import React from 'react'
import styles from './navtext.module.css'
import Link from 'next/link'

type NavTextProps = {
  href: string
  target?: string
  children?: any
}

export default function NavText({ href, target, children }: NavTextProps) {
  const path =
    href?.toLocaleLowerCase() === 'contact'
      ? "mailto:eharrisburnett@gmail.com?subject=Let's Collaborate!"
      : `/${href?.toLocaleLowerCase()}`

  return (
    <li className={styles.navItem}>
      <Link className={styles.navText} href={path} target={target}>
        {children}
      </Link>
    </li>
  )
}
