import React from 'react'
import styles from './navtext.module.css'
import Link from 'next/link'

type NavTextProps = {
  item?: string

  /** Action props */
  onNavTextContainerClick?: () => void
}

export default function NavText({
  item,
  onNavTextContainerClick,
}: NavTextProps) {
  const path =
    item?.toLocaleLowerCase() === 'contact'
      ? "mailto:eharrisburnett@gmail.com?subject=Let's Collaborate!"
      : `/${item?.toLocaleLowerCase()}`

  return (
    <li className={styles.navItem} onClick={onNavTextContainerClick}>
      <Link className={styles.navText} href={path}>
        {item}
      </Link>
    </li>
  )
}
