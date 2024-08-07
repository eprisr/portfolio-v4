'use client';

import React, { useRef } from 'react';
import { Button, LinkButton } from '@/app/ui/components/base/Button';
import Container from './base/Container';
import styles from './collabcta.module.css';

export default function CollabCTA() {
  const scrollRef = useRef(null);

  return (
    <section ref={scrollRef} className={styles.collab_cta}>
      <Container scrollRef={scrollRef} classes={'collab-cta'}>
        <h3 className={`${styles.display3} display3`}>
          Lets Collaborate, Create &amp; Cultivate
        </h3>
        <p className={styles.cta_text}>
          Creating an exceptional online presence requires a synergy of ideas
          and expertise. Let's collaborate to bring your digital aspirations to
          life.
        </p>
        <div className={styles.ctas}>
          <Button variant="solid" colorScheme="madder">
            <LinkButton href="mailto:eharrisburnett@gmail.com?subject=Let's Collaborate!">
              Contact me
            </LinkButton>
          </Button>
          <Button variant="outline" colorScheme="madder">
            <LinkButton href="/work#process">Learn the process</LinkButton>
          </Button>
        </div>
      </Container>
    </section>
  );
}
