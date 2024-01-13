import React from 'react'
import ProjectsWrapper from '../../components/Projects/ProjectsWrapper'
import { fetchProjects, fetchProjectsTotal } from '../../lib/data'
import styles from './projects.module.css'

export const dynamic = 'force-dynamic'

export default async function Projects({ query, offset }: { query: string;  offset: number}) {
  const projects = await fetchProjects(query, offset)
  const total = await fetchProjectsTotal()
  const filters = ['All', 'Web Dev', 'Print', 'Branding', 'Motion']

  return (
    <section className={styles.projects}>
      <div className={`${styles.container} container`}>
        <ProjectsWrapper filters={filters} projects={projects} total={total} />
      </div>
    </section>
  )
}
