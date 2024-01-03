import React from 'react'
import Project from '../../sections/Project/Project'
import styles from '../../sections/Project/project.module.css'

type ProjProps = { params: { project: string } }

const getData = async (project: string) => {
  const res = await fetch(`http://localhost:3000/api/work/${project}`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed')
  }

  return res.json()
}

export default async function page({ params }: ProjProps) {
  return (
    <div className="main_wrapper">
      {params.project}
      <Project />
    </div>
  )
}
