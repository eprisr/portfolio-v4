import React, { Suspense } from 'react';
import { Project } from '@/app/lib/definitions';
import * as Sentry from '@sentry/nextjs';
import Hero from './ui/sections/Home/Hero';
import RecentProjects from './ui/sections/Home/RecentProjects';
import Role from './ui/sections/Home/Role';

async function fetchProjects() {
  const url = process.env.NEXT_PUBLIC_URL;

  const projects = await fetch(url + '/api/work?limit=3')
    .then((res) => res.json())
    .then((data) => data as Project[])
    .catch((error) => {
      console.error('Error Digest:', error.digest);
      Sentry.captureException(error);
      Sentry.captureMessage(
        'An error occured in the Projects Server Components render',
      );
      throw new Error(
        `An error occured in the Projects Server Components render ${error}`,
      );
    });

  return projects;
}

export default async function Page() {
  const projects = await fetchProjects();

  return (
    <div className="main_wrapper">
      <Hero />
      <Role />
      <Suspense>
        <RecentProjects projects={projects} />
      </Suspense>
    </div>
  );
}
