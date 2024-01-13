'use client'

import React, { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Projects from '../../components/Projects/Projects'
import Filter from '../../components/Projects/Filter'
import Button from '../../components/base/Button'
import styles from './projectswrapper.module.css'
import { Project } from '../../lib/definitions'

export default function ProjectsWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const filters = ['All', 'Web Dev', 'Print', 'Branding', 'Motion']

  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentOffset = Number(searchParams.get('offset')) || 0
  const [loadedProjects, setLoadedProjects] = useState<Project[]>([])
  const [activeFilter, setActiveFilter] = useState<string>('All')

  const createPageUrl = (offsetNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set('offset', offsetNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  return (
    <section className={styles.projects}>
      <div className={`${styles.container} container`}>
        <Filter
          filters={filters}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        {children}
        <Button
          href={createPageUrl(currentOffset + 3)}
          colorScheme="china-rose"
          variant="solid"
          scroll={false}>
          Load more
        </Button>
      </div>
    </section>
  )
}
