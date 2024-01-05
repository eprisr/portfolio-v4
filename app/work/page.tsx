import React from 'react'
import Intro from '../sections/Work/Intro'
import Solutions from '../sections/Work/Solutions'
import Companies from '../sections/Work/Companies'
import Projects from '../sections/Work/Projects'
import { fetchProjects } from '../lib/data'

export default async function Work() {
  const projects = await fetchProjects()

  return (
    <div className="main_wrapper">
      <Intro />
      <Projects projects={projects} />
      <Companies />
      <Solutions />
    </div>
  )
}
