import React, { Suspense } from 'react'
import Intro from '@/app/ui/sections/Work/Intro'
import Solutions from '@/app/ui/sections/Work/Solutions'
import Companies from '@/app/ui/sections/Work/Companies'
import ProjectsWrapper from '@/app/ui/sections/Work/ProjectsWrapper'
import { ProjectsSkeleton } from '@/app/ui/components/skeletons'
import Projects from '@/app/ui/sections/Project/Projects'
// import { fetchProjectsTotal } from '@/app/lib/data'

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
