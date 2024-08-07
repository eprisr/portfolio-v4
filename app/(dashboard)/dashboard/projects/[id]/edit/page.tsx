import React from 'react';
import { notFound } from 'next/navigation';
import { fetchProjects, fetchSingleProject } from '@/app/lib/data';
import Form from '@/app/ui/components/dash-projects/EditForm';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [project, projects] = await Promise.all([
    fetchSingleProject(id),
    fetchProjects(0, 0, 'All'),
  ]);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <Form project={project} projects={projects} />
    </div>
  );
}
