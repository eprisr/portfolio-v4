'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Button, LinkButton } from '@/app/ui/components/base/Button';
import Container from '@/app/ui/components/base/Container';
import LuccaMockup from '@/public/assets/images/Lucca_Mockup(2).png';
import styles from './role.module.css';

function Role() {
  const scrollRef = useRef(null);

  return (
    <section ref={scrollRef} className={styles.role}>
      <Container scrollRef={scrollRef} classes="role">
        <div className={` ${styles.left_column} column `}>
          <Image src={LuccaMockup} alt="" className={styles.lucca} />
        </div>
        <div className={` ${styles.right_column} column `}>
          <h5 className="sub1">Defining my role</h5>
          <h2 className="display3">Adding Value to Your Business</h2>
          <p>
            Innovative design and seamless functionality captivate audiences,
            drive conversions, and boost brand visibility. By delivering unique
            online experiences, I help businesses stand out, foster customer
            loyalty, and accelerate digital growth.
          </p>
          <Button variant="solid" colorScheme="accent1">
            <LinkButton href="/about#role_and_contributions">
              Discover my impact
            </LinkButton>
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default Role;
