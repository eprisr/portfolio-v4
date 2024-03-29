import React from 'react'
import Image from 'next/image'
import { Project } from '../../lib/definitions'
import styles from './projects.module.css'
import Link from 'next/link'

export default async function Projects({ total }: { total: number }) {
  const url =
    process.env.NODE_ENV === 'production'
      ? process.env.PROD_URL
      : process.env.DEV_URL

  const projects = await fetch(url + '/api/work')
    .then((res) => res.json())
    .then((data) => data as Project[])
    .catch((error) => {
      throw new Error(error.message)
    })

  return (
    <div className={styles.projects_wrapper}>
      <div className={styles.proj_container}>
        {projects.map((project, i) => (
          <Link href={`/work/${project.id}`} className={styles.proj_link}>
            <div
              key={project.id}
              className={`${i % 2 === 0 ? styles.reverse : ''} ${
                styles.project
              }`}>
              <div className={styles.proj_image}>
                <Image
                  src={`/assets/images/projects/${project.src}`}
                  alt={project.title}
                  width="660"
                  height="660"
                />
              </div>
              <div className={styles.info}>
                <p className={`${styles.title} lead_para`}>{project.title}</p>
                <p className={styles.desc}>{project.brief}</p>
                <div className={styles.tech_stack}>
                  {Object.keys(project.skills).map(
                    (skill: string, index: number) =>
                      project.skills[skill].map((s: string, i: number) => (
                        <div
                          key={`${skill}-${index}${i}`}
                          className={styles.skill}>
                          <span>{s}</span>
                        </div>
                      ))
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
