import React from 'react'
import Button from './base/Button'
import styles from './collabcta.module.css'

type Props = {}

export default function CollabCTA({}: Props) {
  return (
    <section className={styles.collab_cta}>
      <div className={` ${styles.container} container `}>
        <h3 className="display3">
          Lets Collaborate,
          <br />
          Create &amp; Cultivate
        </h3>
        <p>
          Creating an exceptional online presence requires a synergy of ideas
          and expertise – work hand in hand with me to make your digital dreams
          a reality.
        </p>
        <div className={styles.ctas}>
          <Button name="contact" colorScheme="china-rose" variant="solid">
            Contact me
          </Button>
          <Button name="process" colorScheme="china-rose" variant="outline">
            Learn the process
          </Button>
        </div>
      </div>
    </section>
  )
}
