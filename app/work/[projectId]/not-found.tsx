import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <main className={styles.main}>
      <h2 className={styles.h2}>404 Not Found</h2>
      <p>We're sorry. This project doesn't seem to exist.</p>
      <Link
        href="/"
        className={styles.a}>
        Go Back
      </Link>
    </main>
  )
}
