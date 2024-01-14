import React from 'react'
import styles from './navtext.module.css'
import Link from 'next/link'

type NavTextProps = {
  href: string
  target?: string
  rel?: string
  locale?: false
  download?: boolean
  children?: any
}

export default function NavText({
  href,
  target,
  rel,
  locale,
  download,
  children,
}: NavTextProps) {
  const path =
    href?.toLocaleLowerCase() === '/contact'
      ? "mailto:eharrisburnett@gmail.com?subject=Let's Collaborate!"
      : `${href?.toLocaleLowerCase()}`

  return (
    <li className={styles.navItem}>
      <Link
        className={styles.navText}
        href={path}
        target={target}
        rel={rel}
        locale={locale}
        download={download}>
        {children}
      </Link>
    </li>
  )
}
