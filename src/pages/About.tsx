import React from 'react'
import AboutMe from '../sections/About/AboutMe'
import AboutRole from '../sections/About/AboutRole'
import Skills from '../sections/About/Skills'
import Origin from '../sections/About/Origin'

type Props = {}

export default function About({}: Props) {
  return (
    <div className="main_wrapper">
      <AboutMe />
      <AboutRole />
      <Skills />
      <Origin />
    </div>
  )
}
