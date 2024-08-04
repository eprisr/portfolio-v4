'use client';

import React, { useEffect, useRef } from 'react';
import { stagger, useAnimate, useInView } from 'framer-motion';
import { skillsIcons } from '@/app/assets/icons/index';
import Container from '@/app/ui/components/base/Container';
import styles from './skills.module.css';

const staggerSkills = stagger(0.07, { startDelay: 0.08 });

function useStaggerAnimation() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    animate(
      'div',
      { opacity: 0, y: 100 },
      {
        y: { stiffness: 1000 },
        duration: 2,
        delay: 0,
      },
    );

    if (isInView) {
      animate(
        'div',
        { opacity: 1, y: 0 },
        {
          y: { stiffness: 1000, velocity: -100 },
          delay: staggerSkills,
        },
      );
    }
  }, [isInView]);

  return scope;
}

export default function Skills() {
  const scrollRef = useRef(null);
  const scope = useStaggerAnimation();

  return (
    <section ref={scrollRef} className={styles.skills}>
      <Container scrollRef={scrollRef} classes={'about-skills'}>
        <div>
          <h5 className="sub1">Capabilities, Skills,& Tools</h5>
          <h2>Weaving Innovation with Pixels of Precision</h2>
        </div>
        <ul className={styles.skills_list}>
          <li>Object Oriented Programming</li>
          <li>Test Driven Development</li>
          <li>Responsive Design</li>
          <li>Accessibility Standards (WAI)</li>
          <li>UI/UX Design Principles</li>
          <li>Figma to Development</li>
          <li>Project Management</li>
          <li>AWS Code Commit</li>
          <li>SEO</li>
          <li>Git</li>
        </ul>
        <div ref={scope} className={styles.tools}>
          {skillsIcons.map((Icon, key) => (
            <div className={styles.tool} key={key}>
              <Icon.icon className={styles.icon} width="100%" height="32px" />
              <p>{Icon.name}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
