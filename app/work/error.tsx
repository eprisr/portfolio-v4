'use client'

import { useEffect } from 'react'
import * as Sentry from '@sentry/nextjs'
import Image from 'next/image'
import ErrorGraphic from '../../public/assets/images/error/Error_Light.png'
import ErrorGraphicDark from '../../public/assets/images/error/Error_Dark.png'
import styles from './error.module.css'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    Sentry.captureException(error)
    console.error(error)
  }, [error])

  return (
		<div className={styles.main}>
			<Image
				src={ErrorGraphic}
				alt="Oops! Error."
				className={`${styles.errorImg}`}
				priority
			/>
			<Image
				src={ErrorGraphicDark}
				alt="Oops! Error."
				className={`${styles.errorImgDark}`}
				priority
			/>
			<h2 className={styles.h2}>Something went wrong!</h2>
			<p>NOTE: If you use a VPN, try turning it off.</p>
			<button
				className={styles.button}
        onClick={
          () => reset()
        }>
        Try again
      </button>
    </div>
  )
}
