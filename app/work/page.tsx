import React, { Suspense } from 'react'
import Intro from '../sections/Work/Intro'
import Solutions from '../sections/Work/Solutions'
import Companies from '../sections/Work/Companies'
import ProjectsWrapper from '../sections/Work/ProjectsWrapper'
import { ProjectsSkeleton } from '../components/skeletons'
import Projects from '../sections/Project/Projects'
// import { fetchProjectsTotal } from '../lib/data'

export default function Work({
  searchParams,
}: {
  searchParams?: { filter?: string }
}) {
  const filter = searchParams?.filter || 'All'
  // const total = await fetchProjectsTotal(filter)

  return (
    <div className="main_wrapper">
      <Intro />
      <ProjectsWrapper>
        <Suspense fallback={<ProjectsSkeleton />}>
          <Projects />
        </Suspense>
      </ProjectsWrapper>
      <Companies />
      <Solutions />
    </div>
  )
}
