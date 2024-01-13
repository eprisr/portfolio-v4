import React, { Suspense } from 'react'
import Intro from '../sections/Work/Intro'
import Solutions from '../sections/Work/Solutions'
import Companies from '../sections/Work/Companies'
import ProjectsWrapper from '../sections/Work/ProjectsWrapper'
import { ProjectsSkeleton } from '../components/skeletons'
import Projects from '../sections/Project/Projects'
import { fetchProjectsTotal } from '../lib/data'

export default async function Work() {
  const total = await fetchProjectsTotal()

  return (
    <div className="main_wrapper">
      <Intro />
      <ProjectsWrapper>
        <Suspense fallback={<ProjectsSkeleton />}>
          <Projects total={total} />
        </Suspense>
      </ProjectsWrapper>
      <Companies />
      <Solutions />
    </div>
  )
}
