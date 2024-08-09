import React from 'react';
import { notFound } from 'next/navigation';
import { fetchSingleProject } from '@/app/lib/data';
import Form from '@/app/ui/components/dash-projects/EditForm';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const project = await fetchSingleProject(id);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <Form project={project} />
    </div>
  );
}
