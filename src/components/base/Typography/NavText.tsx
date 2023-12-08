import React from 'react'
import styles from './index.module.css'

type NavTextProps = {
  navListItems?: string;

	/** Action props */
  onNavTextContainerClick?: () => void;
};

export default function NavText({
	navListItems,
	onNavTextContainerClick,
}: NavTextProps) {
  return (
    <li
      className={styles.navItem}
      onClick={onNavTextContainerClick}
    >
      <a className={styles.navText}>
        {navListItems}
      </a>
    </li>
  );
}