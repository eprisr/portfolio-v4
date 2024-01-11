import React from 'react'
import Button from './base/Button'
import styles from './collabcta.module.css'

type Props = {}

export default function CollabCTA({}: Props) {
  return (
    <section className={styles.collab_cta}>
      <div className={` ${styles.container} container `}>
        <h3 className={`${styles.display3} display3`}>
          Lets Collaborate, Create &amp; Cultivate
        </h3>
        <p className={styles.cta_text}>
          Creating an exceptional online presence requires a synergy of ideas
          and expertise. Let's collaborate to bring your digital aspirations to
          life.
        </p>
        <div className={styles.ctas}>
          <Button
            href="mailto:eharrisburnett@gmail.com?subject=Let's Collaborate!"
            variant="solid"
            colorScheme="china-rose">
            Contact me
          </Button>
          <Button
            href="/work#process"
            variant="outline"
            colorScheme="china-rose">
            Learn the process
          </Button>
        </div>
      </div>
    </section>
  )
}
