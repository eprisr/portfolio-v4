'use client'

import React from 'react'
import ReactPlayer from 'react-player'
import { Project } from '../../lib/definitions'

export default function Video({ project }: { project: Project }) {
  return (
    <ReactPlayer
      url={project.video.url}
      width="100%"
      height="auto"
      style={{ aspectRatio: '16/9' }}
    />
  )
}
