import React from 'react';
import {
  fetchCustomers,
  fetchInvoiceById,
  fetchProjects,
} from '@/app/lib/data';
import Form from '@/app/ui/components/invoices/EditForm';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [projects, invoice, customers] = await Promise.all([
    fetchProjects(0, 0, 'All'),
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  return (
    <div>
      <Form invoice={invoice} customers={customers} />
    </div>
  );
}
