import React from 'react'
import Project from '../sections/Project/Project'

type ProjProps = { params: { project: string } }

export default function page({ params }: ProjProps) {
  return (
    <div className="main_wrapper">
      {params.project}
      <Project />
    </div>
  )
}
