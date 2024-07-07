"use client"

import React, { MouseEvent, useState } from 'react'
import styles from './button.module.css'
import Link from 'next/link'

type ButtonProps = {
  href: string
  colorScheme: string
  variant: 'solid' | 'outline'
  scroll?: boolean
  children: string | JSX.Element | React.ReactNode
}

function Button({
  href,
  colorScheme,
  variant,
  children,
  ...props
}: ButtonProps) {
	const [relX, setRelX] = useState(0)
  const [relY, setRelY] = useState(0)

	const expandFill = (e: MouseEvent<HTMLDivElement>) => {
    const parentOffsetLeft = e.currentTarget.offsetLeft
    const parentOffsetTop = e.currentTarget.offsetTop
    setRelX(e.pageX - parentOffsetLeft)
    setRelY(e.pageY - parentOffsetTop)
  }

  const contractFill = (e: MouseEvent<HTMLDivElement>) => {
    const parentOffsetLeft = e.currentTarget.offsetLeft
    const parentOffsetTop = e.currentTarget.offsetTop
    setRelX(e.pageX - parentOffsetLeft)
    setRelY(e.pageY - parentOffsetTop)
  }

	return (
    <div className={` ${styles.button_wrapper} ${styles[variant]} `}>
      <div className={` ${styles.button} ${styles[colorScheme]} `} onMouseEnter={expandFill} onMouseLeave={contractFill}>
				<span style={{ top: relY, left: relX }}></span>
        <Link
          href={href}
          type="button"
          className={styles.link}
          scroll={props?.scroll}>
          {children}
        </Link>
      </div>
    </div>
  )
}

export default Button
