import React from 'react'
import Intro from '../sections/Work/Intro'
import Solutions from '../sections/Work/Solutions'
import Companies from '../sections/Work/Companies'
import Projects from '../sections/Work/Projects'

export default async function Work() {
  return (
    <div className="main_wrapper">
      <Intro />
      <Projects />
      <Companies />
      <Solutions />
    </div>
  )
}
