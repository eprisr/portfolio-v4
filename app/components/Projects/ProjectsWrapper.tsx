'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Filter from './Filter'
import Button from '../base/Button'
import { Project } from '../../lib/definitions'
import styles from './projects.module.css'

export default function ProjectsWrapper({
  filters,
  projects,
  total,
}: {
  filters: Array<string>
  projects: Project[]
  total: number
}) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentOffset = Number(searchParams.get('offset')) || 0
  const router = useRouter()
  const [loadedProjects, setLoadedProjects] = useState<Project[]>([])
  const [activeFilter, setActiveFilter] = useState<string>('All')

  const createPageUrl = (offsetNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set('offset', offsetNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  useEffect(() => {
    loadedProjects.some((proj) => proj['id'] === projects[0].id)
      ? setLoadedProjects([...loadedProjects])
      : setLoadedProjects([...loadedProjects, ...projects])
  }, [projects])

  return (
    <div className={styles.projects_wrapper}>
      <Filter
        filters={filters}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <div className={styles.proj_container}>
        {loadedProjects
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
          ))}
      </div>
      {currentOffset + 3 < total && (
        <Button
          href={createPageUrl(currentOffset + 3)}
          colorScheme="china-rose"
          variant="solid"
          scroll={false}>
          Load more
        </Button>
      )}
    </div>
  )
}
