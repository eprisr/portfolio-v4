import React from 'react'
import { Project } from '../../lib/definitions'
import styles from './project.module.css'

export default function Project({ project }: { project: Project }) {
  return (
    <section className={styles.project}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.left_column} column`}>
          <div className={styles.image}></div>
        </div>
        <div className={`${styles.right_column} column`}>
          <div>
            <h5 className="sub1">Subtitle</h5>
            <h2 className="display3">{project.title}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor
              orci dapibus ultrices in. Velit dignissim sodales ut eu sem
              integer vitae. Pretium fusce id velit ut. Aenean euismod elementum
              nisi quis eleifend. Tincidunt lobortis feugiat vivamus at augue
              eget arcu.
            </p>
            <dl className={styles.desc_list}>
              <div>
                <dt className={styles.desc_term}>Frontend</dt>
                <dd className={styles.desc_desc}>React</dd>
              </div>
              <div>
                <dt className={styles.desc_term}>Backend</dt>
                <dd className={styles.desc_desc}>Node.js</dd>
              </div>
              <div>
                <dt className={styles.desc_term}>Program</dt>
                <dd className={styles.desc_desc}>Illustrator</dd>
              </div>
              <div>
                <dt className={styles.desc_term}>Font</dt>
                <dd className={styles.desc_desc}>Montserrat</dd>
              </div>
              <div>
                <dt className={styles.desc_term}>Relevant Packages</dt>
                <dd className={styles.desc_desc}>Google Maps API</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
