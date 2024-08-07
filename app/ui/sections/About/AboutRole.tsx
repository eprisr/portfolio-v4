'use client';

import React, { useEffect, useRef } from 'react';
import {
  animate,
  motion,
  useAnimate,
  useInView,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import Container from '@/app/ui/components/base/Container';
import styles from './aboutrole.module.css';

function Counter({
  className,
  from,
  to,
}: {
  className: string;
  from: number;
  to: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const count = useMotionValue(from);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, to, {
        duration: 2,
      });

      return animation.stop;
    }
  });

  return (
    <motion.p ref={ref} className={`${styles[className]}`}>
      {rounded}
    </motion.p>
  );
}

export default function AboutRole() {
  const scrollRef = useRef(null);

  return (
    <section
      ref={scrollRef}
      id="role_and_contributions"
      className={styles.role}
    >
      <Container scrollRef={scrollRef} classes={'about-role'}>
        <div className={styles.contributions}>
          <h5 className="sub1">What I do</h5>
          <h2>My Role & Contributions</h2>
          <p>
            As a software engineer, I add value to businesses by crafting unique
            and user-friendly websites. I understand the importance of an
            influential online presence in today's digital era.
          </p>
          <p>
            By creating visually stunning designs, optimizing website
            performance, and integrating seamless user experiences, I help
            businesses stand out from the competition and attract more
            customers. With expertise in responsive design and mobile
            optimization, I ensure clients' websites are accessible and engaging
            across all devices, enhancing their reach and impact.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <Counter className={'stat_num'} from={0} to={11} />
              <p className={styles.stat_desc}>Years Total Experience</p>
            </div>
            <div className={styles.stat}>
              <Counter className={'stat_num'} from={0} to={1} />
              <p className={styles.stat_desc}>Co-Founded Business</p>
            </div>
            <div className={styles.stat}>
              <Counter className={'stat_num'} from={0} to={5} />
              <p className={styles.stat_desc}>Companies Worked For</p>
            </div>
          </div>
        </div>
        <div className={styles.chevron_bg}></div>
      </Container>
    </section>
  );
}
