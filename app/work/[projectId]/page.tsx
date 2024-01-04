import React from 'react'
import Project from '../../sections/Project/Project'
import styles from '../../sections/Project/project.module.css'

type ProjIdProps = { params: { projectId: string } }

async function getProjects(projectId: string) {
  const url =
    process.env.NODE_ENV === 'development'
      ? process.env.LOCAL_URL
      : process.env.PROD_URL

  const res = await fetch(
    `portfolio-v4-sigma-two.vercel.app/api/work/${projectId}`
  )

  if (!res.ok) throw new Error('Failed')

  return res.json()
}

export default async function page({ params }: ProjIdProps) {
  const { projectId } = params
  console.log(projectId)
  const project = await getProjects(projectId)

  return (
    <div className="main_wrapper">
      <Project project={project} />
    </div>
  )
}
