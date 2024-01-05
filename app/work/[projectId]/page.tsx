import React from 'react'
import Project from '../../sections/Project/Project'
import { fetchSingleProject } from '../../lib/data'

type ProjIdProps = { params: { projectId: string } }

export default async function page({ params }: ProjIdProps) {
  const { projectId } = params
  const project = await fetchSingleProject(projectId)

  return (
    <div className="main_wrapper">
      <Project project={project} />
    </div>
  )
}
