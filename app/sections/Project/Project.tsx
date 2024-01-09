import React from 'react'
import { MdOutlineOpenInNew } from 'react-icons/md'
import Link from 'next/link'
import Image from 'next/image'
import Slider from '../../components/Projects/Slider'
import Video from '../../components/Projects/Video'
import { Project } from '../../lib/definitions'
import styles from './project.module.css'

export default function Project({ project }: { project: Project }) {
  return (
    <section className={styles.project}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.left_column} column`}>
          {project?.src && (
            <Image
              src={`/assets/images/projects/${project.src}`}
              alt={project.title}
              className={styles.image}
              width="500"
              height="500"
            />
          )}
          {project?.slides.length !== 0 && <Slider project={project} />}
          {Object.keys(project?.video).length !== 0 && (
            <Video project={project} />
          )}
        </div>
        <div className={`${styles.right_column} column`}>
          <div>
            <h5 className="sub1">{project.client}</h5>
            <h2 className="display3">
              {project.title}
              {project?.titlelink && (
                <Link
                  href={project?.titlelink}
                  target="_blank"
                  className={styles.open_in_new}>
                  <MdOutlineOpenInNew />
                </Link>
              )}
            </h2>
            <p>{project.projdesc}</p>
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
