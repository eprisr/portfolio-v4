import React from 'react'
import Intro from '../sections/Work/Intro'
import Solutions from '../sections/Work/Solutions'

type Props = {}

export default function Work({}: Props) {
  return (
    <div className="main_wrapper">
      <Intro />
      <Solutions />
    </div>
  )
}
