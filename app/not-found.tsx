import Image from 'next/image';
import Link from 'next/link';
import '@/app/theme/theme.css';
import '@/app/ui/app.css';
import ErrorGraphic from '@/public/assets/images/error/69104720_10000_3_2-07.png';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.main}>
      <Image
        src={ErrorGraphic}
        alt="Oops! Error."
        className={`${styles.errorImg}`}
        priority
      />
      <h2 className={styles.h2}>404 Not Found</h2>
      <p>We're sorry. This project doesn't seem to exist.</p>
      <Link href="/" className={styles.a}>
        Go Back
      </Link>
    </div>
  );
}
