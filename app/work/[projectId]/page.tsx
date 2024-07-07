import React from 'react'
import { notFound } from 'next/navigation'
import * as Sentry from "@sentry/nextjs";
import Project from '../../components/Projects/Project'
import { fetchSingleProject } from '../../lib/data'

type ProjIdProps = { params: { projectId: string } }

export const dynamic = 'force-dynamic'

export default async function page({ params }: ProjIdProps) {
  const { projectId } = params
	const project = await fetchSingleProject(projectId)

	if (!project) {
		Sentry.captureException(`Project not found: ${ projectId }`)
		notFound();
	}

  return (
		<div className="main_wrapper">
			<Project project={project} />
    </div>
  )
}
