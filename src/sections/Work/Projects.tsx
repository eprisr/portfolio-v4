import React, { useEffect, useState } from 'react'
import Button from '../../components/base/Button'
import projectDescs from './projectDescs.json'
import styles from './projects.module.css'

type Props = {}

export default function Projects({}: Props) {
  const filters = ['All', 'Web Dev', 'Print', 'Branding', 'Motion']
  const [activefilter, setActivefilter] = useState<string>('All')

  return (
    <section className={styles.projects}>
      <div className={`${styles.container} container`}>
        <div className={styles.filter}>
          {filters.map((filter, i) => (
            <span
              key={i}
              className={`${activefilter === filter ? styles.active : ''}`}>
              {filter}
            </span>
          ))}
        </div>
        <div className={styles.proj_container}>
          {projectDescs.map((project, i) => (
            <div
              key={project.id}
              className={`${i % 2 === 1 ? styles.reverse : ''} ${
                styles.project
              } ${styles.type}`}>
              <div className={styles.info}>
                <p className={`${styles.title} lead_para`}>{project.title}</p>
                <p className={styles.desc}>{project.brief}</p>
                <div className={styles.tech_stack}>
                  {project.skills.map((skill) => (
                    <div key={skill} className={styles.skill}>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.proj_image}>
                <img
                  src={require(`../../assets/images/projects/${project.src}`)}
                  alt={project.title}
                />
              </div>
            </div>
          ))}
        </div>
        <Button name="projects" colorScheme="china-rose" variant="solid">
          Load more
        </Button>
      </div>
    </section>
  )
}
