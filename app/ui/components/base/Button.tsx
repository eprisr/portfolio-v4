'use client';

import React, { MouseEvent, useState } from 'react';
import Link from 'next/link';
import styles from './button.module.css';

interface CustomButtonProps {
  colorScheme: string;
  variant: 'solid' | 'outline';
  children: string | JSX.Element | React.ReactNode;
}

interface FormButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  children: string | JSX.Element | React.ReactNode;
}
interface LinkButtonProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  href: string;
  scroll?: boolean;
  children: string | JSX.Element | React.ReactNode;
}

const Button = ({
  colorScheme,
  variant,
  children,
  ...props
}: CustomButtonProps) => {
  const [relX, setRelX] = useState(0);
  const [relY, setRelY] = useState(0);

  const expandFill = (e: MouseEvent<HTMLDivElement>) => {
    const parentOffsetLeft = e.currentTarget.offsetLeft;
    const parentOffsetTop = e.currentTarget.offsetTop;
    setRelX(e.pageX - parentOffsetLeft);
    setRelY(e.pageY - parentOffsetTop);
  };

  const contractFill = (e: MouseEvent<HTMLDivElement>) => {
    const parentOffsetLeft = e.currentTarget.offsetLeft;
    const parentOffsetTop = e.currentTarget.offsetTop;
    setRelX(e.pageX - parentOffsetLeft);
    setRelY(e.pageY - parentOffsetTop);
  };

  return (
    <div className={` ${styles.button_wrapper} ${styles[variant]} `}>
      <div
        className={` ${styles.button} ${styles[colorScheme]} `}
        onMouseEnter={expandFill}
        onMouseLeave={contractFill}
      >
        <span style={{ top: relY, left: relX }}></span>
        {children}
      </div>
    </div>
  );
};

const LinkButton = ({ href, children, ...props }: LinkButtonProps) => {
  return (
    <Link
      href={href}
      type="button"
      className={styles.link}
      scroll={props?.scroll}
    >
      {children}
    </Link>
  );
};

const FormButton = ({ type, children, ...props }: FormButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles.link}
 ${styles.formLink}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button, LinkButton, FormButton };
