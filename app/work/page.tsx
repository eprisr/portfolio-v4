import React, { Suspense } from 'react'
import Intro from '../sections/Work/Intro'
import Solutions from '../sections/Work/Solutions'
import Companies from '../sections/Work/Companies'
import Projects from '../sections/Work/Projects'
import { ProjectsSkeleton } from '../components/skeletons'

export default function Work({
  searchParams,
}: {
  searchParams?: {
    query?: string
    offset?: string
  }
}) {
  const query = searchParams?.query || ''
  const currentOffset = Number(searchParams?.offset) || 0

  return (
    <div className="main_wrapper">
      <Intro />
      <Suspense fallback={<ProjectsSkeleton />}>
        <Projects query={query} offset={currentOffset} />
      </Suspense>
      <Companies />
      <Solutions />
    </div>
  )
}
