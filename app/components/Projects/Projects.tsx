'use client'

import React, { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { Project } from '../../lib/definitions'
import styles from './projects.module.css'

const Projects = ({ total }: { total: number }) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentOffset = Number(searchParams.get('offset')) || 0

  const [projects, setProjects] = useState<Project[]>([])

  const createPageUrl = (offsetNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set('offset', offsetNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  function loadMore() {
    router.push(createPageUrl(currentOffset + 3), { scroll: false })
  }

  useEffect(() => {
    const incompleteLoad = projects.length !== currentOffset
    const offset = incompleteLoad ? 0 : currentOffset
    const limit = incompleteLoad ? currentOffset + 3 : offset + 3
    if (incompleteLoad) {
      fetch(`/api/work?limit=${limit}&offset=${offset}`)
        .then((res) => res.json())
        .then((data) => {
          setProjects([...data])
        })
        .catch((error) => {
          throw new Error(error.message)
        })
    } else {
      fetch(`/api/work?offset=${offset}`)
        .then((res) => res.json())
        .then((data) => {
          projects.some((proj) => proj['id'] === data[0].id)
            ? setProjects([...projects])
            : setProjects([...projects, ...data])
        })
        .catch((error) => {
          throw new Error(error.message)
        })
    }
  }, [currentOffset])

  return (
    <div className={styles.projects_wrapper}>
      <div className={styles.proj_container}>
        {projects
          // .filter((project) => project.type.includes(activeFilter))
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
        <button className={styles.button} onClick={loadMore}>
          Load more
        </button>
      )}
    </div>
  )
}

export default Projects
