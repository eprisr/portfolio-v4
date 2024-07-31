import Link from 'next/link'
import ErrorGraphic from '../../../public/assets/images/error/404_Light.png'
import ErrorGraphicDark from '../../../public/assets/images/error/404_Dark.png'
import styles from './not-found.module.css'
import Image from 'next/image'

export default function NotFound() {
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
      <h2 className={styles.h2}>404 Not Found</h2>
      <p>We're sorry. This project doesn't seem to exist.</p>
      <Link href="/" className={styles.a}>
        Go Back
      </Link>
    </div>
  )
}
