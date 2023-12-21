import React from 'react'
import AboutMe from '../sections/About/AboutMe'
import AboutRole from '../sections/About/AboutRole'

type Props = {}

export default function About({}: Props) {
  return (
    <div className="main_wrapper">
      <AboutMe />
      <AboutRole />
    </div>
  )
}
