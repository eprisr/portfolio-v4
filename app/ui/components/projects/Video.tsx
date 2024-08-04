'use client';

import React from 'react';
import ReactPlayer from 'react-player';

export default function Video({ project }: { project: Project }) {
  const { video } = project;

  return (
    <ReactPlayer
      url={video.url}
      width="100%"
      height="auto"
      style={{ aspectRatio: '16/9' }}
    />
  );
}
