import React, { Suspense } from 'react';
import { Project } from '@/app/lib/definitions';
import * as Sentry from '@sentry/nextjs';
import Hero from './ui/sections/Home/Hero';
import RecentProjects from './ui/sections/Home/RecentProjects';
import Role from './ui/sections/Home/Role';

async function fetchProjects() {
  const url = process.env.NEXT_PUBLIC_URL;

  const res = await fetch(url + '/api/work?limit=3');

  if (!res.ok) {
    Sentry.captureMessage(
      'An error occured in the Projects Server Components render',
    );
    throw new Error(
      `An error occured in the Projects Server Components render`,
    );
  }

  return res.json();
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
