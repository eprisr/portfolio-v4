import React from 'react';
import Link from 'next/link';
import styles from './navtext.module.css';

type NavTextProps = {
  href: string;
  target?: string;
  rel?: string;
  locale?: false;
  download?: boolean;
  children?: any;
};

export default function NavText({
  href,
  target,
  rel,
  locale,
  download,
  children,
}: NavTextProps) {
  let path = '#';
  // href?.toLocaleLowerCase() === '/contact'
  //   ? "mailto:eharrisburnett@gmail.com?subject=Let's Collaborate!"
  //   : `${href?.toLocaleLowerCase()}`;

  switch (href.toLocaleLowerCase()) {
    case '/contact':
      path = "mailto:eharrisburnett@gmail.com?subject=Let's Collaborate!";
      break;
    case '/epris_richardson_resume.pdf':
      path = `${href}`;
      break;
    default:
      path = `${href.toLocaleLowerCase()}`;
  }

  return (
    <li className={styles.navItem}>
      <Link
        className={styles.navText}
        href={path}
        target={target}
        rel={rel}
        locale={locale}
        download={download}
      >
        {children}
      </Link>
    </li>
  );
}
