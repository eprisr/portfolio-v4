import React from 'react'
import Hero from './sections/Home/Hero'
import Role from './sections/Home/Role'
import RecentProjects from './sections/Home/RecentProjects'

export default function Page() {
  return (
    <div className="main_wrapper">
      <Hero />
      <Role />
      <RecentProjects />
    </div>
  )
}
