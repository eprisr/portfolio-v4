'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { stagger, useAnimate, useInView } from 'framer-motion';
import { Project } from '@/app/lib/definitions';
import Button from '@/app/ui/components/base/Button';
import Container from '@/app/ui/components/base/Container';
import styles from './recentprojects.module.css';


const staggerProjects = stagger(0.2, { startDelay: 0.08 });

function useStaggerAnimation() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    animate(
      scope.current,
      { clipPath: 'inset(10% 50% 90% 50% round 10px)' },
      {
        type: 'spring',
        bounce: 0,
        duration: 0.5,
      },
    );

    animate(
      'a',
      { opacity: 0, scale: 0.3, filter: 'blur(20px)' },
      {
        duration: 0.2,
        delay: 0,
      },
    );

    if (isInView) {
      animate(scope.current, { clipPath: 'inset(0% 0% 0% 0% round 10px)' });

      animate(
        'a',
        { opacity: 1, scale: 1, filter: 'blur(0px)' },
        {
          delay: staggerProjects,
        },
      );
    }
  }, [isInView]);

  return scope;
}

function RecentProjects({ projects }: { projects: Project[] }) {
  const scope = useStaggerAnimation();

  return (
    <section className={styles.projects}>
      <Container classes="projects">
        <div className={styles.heading}>
          <h5 className="sub1">Turn visions into online reality</h5>
          <h2 className="display3">Latest Projects</h2>
        </div>
        <div ref={scope} className={styles.project_list}>
          {projects.map((proj) => (
            <Link key={proj.id} href={proj.titlelink.at(-1)!} target="_blank">
              <div className={styles.project}>
                <div className={styles.proj_desc}>
                  <p className={`${styles.lead_para} lead_para`}>
                    {proj.title}
                  </p>
                  <p className={styles.language}>
                    {proj.skills.Frontend.includes('React')
                      ? 'React.JS'
                      : 'Vanilla JS'}
                  </p>
                </div>
                <span className={styles.faded_image}>
                  <Image
                    src={`/assets/images/projects/${proj.src}`}
                    alt={proj.title}
                    width="1140"
                    height="1140"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <Button href="/work" variant="solid" colorScheme="madder">
          View my work
        </Button>
      </Container>
    </section>
  );
}

export default RecentProjects;