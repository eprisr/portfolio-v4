'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Image from 'next/image'
import Filter from './Filter'
import { Project } from '../../lib/definitions'
import styles from './projects.module.css'

export default function ProjectsWrapper({
  filters,
  projects,
}: {
  filters: Array<string>
  projects: Project[]
}) {
  const router = useRouter()
  const [activeFilter, setActiveFilter] = useState<string>('All')

  return (
    <div>
      <Filter
        filters={filters}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <div className={styles.proj_container}>
        {projects
          .filter((project) => project.type.includes(activeFilter))
          .map((project, i) => (
            <div
              key={project.id}
              className={`${i % 2 === 0 ? styles.reverse : ''} ${
                styles.project
              }`}
              onClick={() => router.push(`/work/${project.id}`)}>
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
                  {Object.keys(project.skills).map((skill: string, i: number) =>
                    project.skills[skill].map((s: string) => (
                      <div key={`${skill}-${i}`} className={styles.skill}>
                        <span>{s}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
