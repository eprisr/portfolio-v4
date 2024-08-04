import React from 'react'
import styles from './intro.module.css'

export default function Intro() {
  return (
    <section className={styles.intro}>
      <div className={`${styles.container} container`}>
        <h5 className="sub1">Explore my work</h5>
        <h2 className="display3">
          Unlocking
          <br />
          Digital
          <br />
          Potential.
        </h2>
        <p>
          Since 2012, I've worked professionally with several companies across
          various industries to design and execute accessible, responsive &
          user-driven websites, decision-making marketing pieces, and a couple
          of motion graphic videos. No matter the industry or product, I aim to
          analyze the business' goals, focus on consumers' needs, and deliver
          quality products and work performance.
        </p>
      </div>
    </section>
  )
}
