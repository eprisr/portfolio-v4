import React from 'react';
import { fetchCustomers, fetchProjects } from '@/app/lib/data';
import Form from '@/app/ui/components/invoices/CreateForm';

export default async function Page() {
  const projects = await fetchProjects(0, 0, 'All');
  const customers = await fetchCustomers();

  return (
    <div>
      <Form customers={customers} />
    </div>
  );
}
