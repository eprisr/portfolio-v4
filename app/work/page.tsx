import React, { Suspense } from 'react'
import Intro from '../sections/Work/Intro'
import Solutions from '../sections/Work/Solutions'
import Companies from '../sections/Work/Companies'
import ProjectsWrapper from '../sections/Work/ProjectsWrapper'
import { ProjectsSkeleton } from '../components/skeletons'
import Projects from '../components/Projects/Projects'
import { fetchProjectsTotal } from '../lib/data'

export default async function Work({
  searchParams,
}: {
  searchParams?: {
    query?: string
    offset?: string
  }
}) {
  const query = searchParams?.query || ''
	const currentOffset = Number(searchParams?.offset) || 0
	
	const total = await fetchProjectsTotal()

  return (
    <div className="main_wrapper">
      <Intro />
      <ProjectsWrapper>
        <Suspense fallback={<ProjectsSkeleton />}>
          <Projects offset={currentOffset} />
        </Suspense>
      </ProjectsWrapper>
      <Companies />
      <Solutions />
    </div>
  )
}
