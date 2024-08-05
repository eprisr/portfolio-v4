import Link from 'next/link';
import { PiPowerFill } from 'react-icons/pi';
import NavLinks from '@/app/ui/components/dashboard/NavLinks';
import styles from './sidenav.module.css';

export default function SideNav() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.navlinks}>
        <NavLinks />
        <div className={styles.empty}></div>
        <form>
          <button className={styles.button}>
            <PiPowerFill className={styles.powericon} />
            <div className={styles.signout}>Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
