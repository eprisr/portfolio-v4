import React from 'react'
import styles from './button.module.css'
import Link from 'next/link'

type ButtonProps = {
  name: string
  colorScheme: string
  variant: 'solid' | 'outline'
  as?: string
  href?: string
  children: string | JSX.Element | React.ReactNode
}

function Button({
  href,
  colorScheme,
  variant,
  children,
  ...props
}: ButtonProps) {
  return (
    <div
      className={` ${styles.button} ${styles[variant]} ${styles[colorScheme]} `}>
      <Link href={href || ''} type="button" className={styles.link}>
        {children}
      </Link>
    </div>
  )
}

export default Button
