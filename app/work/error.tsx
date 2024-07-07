'use client'

import { useEffect } from 'react'
import styles from './error.module.css'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <main className={styles.main}>
      <h2 className={styles.h2}>Something went wrong!</h2>
			<button
				className={styles.button}
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }>
        Try again
      </button>
    </main>
  )
}
