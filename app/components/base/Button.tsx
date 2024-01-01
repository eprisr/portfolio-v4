'use client'

import React from 'react'
import styles from './button.module.css'
import { useRouter } from 'next/navigation'

type ButtonProps = {
  name: string
  colorScheme: string
  variant: 'solid' | 'outline'
  as?: string
  href?: string
  children: string | JSX.Element | React.ReactNode
}

function Button({
  name,
  colorScheme,
  variant,
  children,
  ...props
}: ButtonProps) {
  const router = useRouter()

  return (
    <button
      name={name}
      type="button"
      id={styles.button}
      className={` ${styles[colorScheme]} ${styles[variant]} `}
      onClick={() => router.push(props.href || '')}>
      {children}
    </button>
  )
}

export default Button
