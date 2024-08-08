'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TbFileInvoice, TbHome, TbUsers } from 'react-icons/tb';
import styles from './navlinks.module.css';

const links = [
  {
    title: 'Dashboard',
    links: [
      { name: 'Home', href: '/dashboard', icon: TbHome },
      { name: 'Projects', href: '/dashboard/projects', icon: TbUsers },
      {
        name: 'Invoices',
        href: '/dashboard/invoices',
        icon: TbFileInvoice,
      },
    ],
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className={styles.navLinks}>
      {links.map((cat) => (
        <li key={cat.title}>
          <span>{cat.title}</span>
          {cat.links.map((link) => {
            const LinkIcon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href && styles.active}`}
              >
                <LinkIcon className={styles.linkIcon} />
                <p className={styles.linkName}>{link.name}</p>
              </Link>
            );
          })}
        </li>
      ))}
    </ul>
  );
}
