import React from 'react';
import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';
import Form from '@/app/ui/components/invoices/EditForm';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  return (
    <div>
      <Form invoice={invoice} customers={customers} />
    </div>
  );
}
