import React from 'react'
import Intro from '../sections/Work/Intro'
import Solutions from '../sections/Work/Solutions'
import Companies from '../sections/Work/Companies'

type Props = {}

export default function Work({}: Props) {
  return (
    <div className="main_wrapper">
      <Intro />
      <Companies />
      <Solutions />
    </div>
  )
}
