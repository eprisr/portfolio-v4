import React from 'react';
import { notFound } from 'next/navigation';
import { fetchSingleProject } from '@/app/lib/data';
import Project from '@/app/ui/components/projects/SingleProject';
import * as Sentry from '@sentry/nextjs';

type ProjIdProps = { params: { projectId: string } };

export const dynamic = 'force-dynamic';

export default async function page({ params }: ProjIdProps) {
  const { projectId } = params;
  const project = await fetchSingleProject(projectId);

  if (!project) {
    Sentry.captureException(`Project not found: ${projectId}`);
    notFound();
  }

  return (
    <div className="main_wrapper">
      <Project project={project} />
    </div>
  );
}
