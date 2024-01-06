'use client'

import React, { useEffect, useState } from 'react'
import useSWR, { Fetcher } from 'swr'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Button from '../../components/base/Button'
import { Project } from '../../lib/definitions'
import styles from './projects.module.css'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Projects() {
  const router = useRouter()
  const { data: projects } = useSWR('/api/work', fetcher, { suspense: true })
  const filters = ['All', 'Web Dev', 'Print', 'Branding', 'Motion']
  const [activeFilter, setActiveFilter] = useState<string>('All')

  return (
    <section className={styles.projects}>
      <div className={`${styles.container} container`}>
        <div className={styles.filter_desktop}>
          {filters.map((filter, i) => (
            <span
              key={i}
              className={`${activeFilter === filter ? styles.active : ''}`}
              onClick={() => setActiveFilter(filter)}>
              {filter}
            </span>
          ))}
        </div>
        <div className={styles.filter_mobile}>
          <select
            name="filter"
            id="filter"
            className={styles.filter}
            onChange={(e) => setActiveFilter(e.target.value)}>
            {filters.map((filter, i) => (
              <option key={i}>{filter}</option>
            ))}
          </select>
        </div>
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
                    {project.skills.map((skill: string) => (
                      <div key={skill} className={styles.skill}>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
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
