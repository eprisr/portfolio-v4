import React from 'react';
import { fetchProjects } from '@/app/lib/data';
import Hero from '@/app/ui/sections/Home/Hero';
import RecentProjects from '@/app/ui/sections/Home/RecentProjects';
import Role from '@/app/ui/sections/Home/Role';

export default async function Page() {
  const projects = await fetchProjects(3, 0, 'All');

  return (
    <div className="main_wrapper">
      <Hero />
      <Role />
      {projects ? <RecentProjects projects={projects} /> : <p>Loading ...</p>}
    </div>
  );
}
