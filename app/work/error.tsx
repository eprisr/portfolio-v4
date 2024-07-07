'use client'

import { useEffect } from 'react'
import * as Sentry from '@sentry/nextjs'
import styles from './error.module.css'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
		Sentry.captureException({
			message: error.message,
			stack: error.stack,
			digest: error.digest,
		})
    console.error(error)
  }, [error])

  return (
    <main className={styles.main}>
      <h2 className={styles.h2}>Something went wrong!</h2>
			<button
				className={styles.button}
        onClick={
          () => reset()
        }>
        Try again
      </button>
    </main>
  )
}
