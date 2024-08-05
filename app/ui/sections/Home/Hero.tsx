import React from 'react';
import Button from '@/app/ui/components/base/Button';
import FeaturedImage from '@/app/ui/components/hero/FeaturedImage';
import styles from './hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={` container ${styles.heroContainer} `}>
        <div className={` ${styles.left_column} column `}>
          <h1 className={styles.intro}>
            <span className={styles.greeting}>Hello,</span> <br />
            my name is &Eacute;pris
          </h1>
          <p className={styles.pronunciation}>(pronounced aye-pree)</p>
          <p className={styles.intro_text}>
            I'm a technical and visual problem solver who fuses innovation and
            creativity to craft immersive digital experiences.
          </p>
          <Button href="/about" variant="solid" colorScheme="accent2">
            About Me
          </Button>
        </div>
        <FeaturedImage />
      </div>
    </section>
  );
}

export default Hero;