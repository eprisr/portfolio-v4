import React from 'react'
import Intro from '../sections/Work/Intro'
import Solutions from '../sections/Work/Solutions'
import Companies from '../sections/Work/Companies'
import Projects from '../sections/Work/Projects'

async function getProjects() {
  const url =
    process.env.NODE_ENV === 'development'
      ? process.env.LOCAL_URL
      : process.env.PROD_URL

  const res = await fetch(url + '/api/work')
  console.log('res: ', res)

  if (!res.ok) throw new Error('Failed')

  return res.json()
}

export default async function Work() {
  const projects = await getProjects()

  return (
    <div className="main_wrapper">
      <Intro />
      <Projects projects={projects} />
      <Companies />
      <Solutions />
    </div>
  )
}
