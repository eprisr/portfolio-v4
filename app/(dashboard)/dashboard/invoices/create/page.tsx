import React from 'react';
import { fetchCustomers } from '@/app/lib/data';
import Form from '@/app/ui/components/invoices/CreateForm';

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <div>
      <Form customers={customers} />
    </div>
  );
}
