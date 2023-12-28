import React from 'react'
import styles from './intro.module.css'

type Props = {}

export default function Intro({}: Props) {
  return (
    <section className={styles.intro}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.left_column} column`}>
          <h5 className="sub1">Explore my work</h5>
          <h2 className="display3">Unlocking Digitial Potential.</h2>
        </div>
        <div className={`${styles.right_column} column`}>
          <p>
            Since 2012, I’ve worked in a professional setting with several
            companies across various industries to design and execute:
            accessible, responsive & user-driven websites, decision-making
            marketing pieces, and even a couple of motion graphic videos. No
            matter the industry or product, my aim is to always analyze the
            business goals, focus on the consumers’ needs, and deliver quality
            product and work performance.
          </p>
        </div>
      </div>
    </section>
  )
}
