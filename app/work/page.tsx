import React, { Suspense } from 'react';
import { ProjectsSkeleton } from '@/app/ui/components/skeletons';
import Projects from '@/app/ui/sections/Project/Projects';
import Companies from '@/app/ui/sections/Work/Companies';
import Intro from '@/app/ui/sections/Work/Intro';
import ProjectsWrapper from '@/app/ui/sections/Work/ProjectsWrapper';
import Solutions from '@/app/ui/sections/Work/Solutions';

// import { fetchProjectsTotal } from '@/app/lib/data'

export default function Work({
  searchParams,
}: {
  searchParams?: { filter?: string };
}) {
  const filter = searchParams?.filter || 'All';
  // const total = await fetchProjectsTotal(filter)

  return (
    <div className="main_wrapper">
      <Intro />
      <ProjectsWrapper>
        <Suspense fallback={<ProjectsSkeleton />}>
          <Projects />
        </Suspense>
      </ProjectsWrapper>
      <Companies />
      <Solutions />
    </div>
  );
}
