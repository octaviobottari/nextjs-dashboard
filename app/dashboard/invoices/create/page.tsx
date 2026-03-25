import Form from '@/app/ui/invoices/create-form';
import { fetchCustomers } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Invoice',
};

export default async function Page() {
  const customers = await fetchCustomers();
  
  return (
    <main>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Create Invoice</h1>
      </div>
      <Form customers={customers} />
    </main>
  );
}