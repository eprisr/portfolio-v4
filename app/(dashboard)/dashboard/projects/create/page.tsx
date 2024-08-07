import React from 'react';
import { fetchProjects } from '@/app/lib/data';
import Form from '@/app/ui/components/dash-projects/CreateForm';

export default async function Page() {
  const projects = await fetchProjects(0, 0, 'All');

  return (
    <div>
      <Form projects={projects} />
    </div>
  );
}
