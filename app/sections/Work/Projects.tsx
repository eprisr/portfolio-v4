import React, { Suspense } from 'react'
import ProjectsWrapper from '../../components/Projects/ProjectsWrapper'
import Button from '../../components/base/Button'
import { ProjectsSkeleton } from '../../components/skeletons'
import { fetchProjects } from '../../lib/data'
import styles from './projects.module.css'

export const dynamic = 'force-dynamic'

export default async function Projects() {
  const projects = await fetchProjects()
  const filters = ['All', 'Web Dev', 'Print', 'Branding', 'Motion']

  return (
    <section className={styles.projects}>
      <div className={`${styles.container} container`}>
        <Suspense fallback={<ProjectsSkeleton />}>
          <ProjectsWrapper filters={filters} projects={projects} />
        </Suspense>
        <Button href="" colorScheme="china-rose" variant="solid">
          Load more
        </Button>
      </div>
    </section>
  )
}
