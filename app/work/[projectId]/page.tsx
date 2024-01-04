import React from 'react'
import Project from '../../sections/Project/Project'
import { projectDescs } from '../../sections/Work/projectDescs'

type ProjIdProps = { params: { projectId: string } }
type ProjProps = {
  id: string
  type: Array<string>
  src: string
  title: string
  clickable: boolean
  date: string
  client: string
  brief: string
  desc: string
  skills: Array<string>
}

export default function page({ params }: ProjIdProps) {
  const { projectId } = params
  const project: ProjProps | undefined = projectDescs.find(
    (project) => project.id === projectId
  )

  return (
    <div className="main_wrapper">
      <Project project={project} />
    </div>
  )
}
