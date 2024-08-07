'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { BsCaretLeft, BsCaretRight } from 'react-icons/bs';
import { Project } from '@/app/lib/definitions';
import styles from './slider.module.css';

export default function Slider({ project }: { project: Project }) {
  const { slides, title } = project;
  const [active, setActive] = useState<number>(0);
  const length = slides.length;

  const next = () => active < length - 1 && setActive(active + 1);
  const prev = () => active > 0 && setActive(active - 1);

  return (
    <div className={styles.carousel}>
      <BsCaretLeft
        onClick={prev}
        className={`${styles.arrow} ${styles.arrow_left}`}
      />
      {slides.map((src: string, i: number) => (
        <Image
          src={src}
          key={i}
          alt={title}
          width="500"
          height="500"
          className={
            active === i
              ? `${styles.slide}`
              : `${styles.slide} ${styles.slide_hidden}`
          }
        />
      ))}
      <BsCaretRight
        onClick={next}
        className={`${styles.arrow} ${styles.arrow_right}`}
      />
      <span className={styles.indicators}>
        {slides.map((_, i) => {
          return (
            <button
              key={i}
              className={
                active === i
                  ? `${styles.indicator}`
                  : `${styles.indicator} ${styles.indicator_inactive}`
              }
              onClick={() => setActive(i)}
            ></button>
          );
        })}
      </span>
    </div>
  );
}
