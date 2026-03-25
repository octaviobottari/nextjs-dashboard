import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edit Invoice',
};

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  
  return (
    <main>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Edit Invoice</h1>
        <p className="text-gray-500">Editing invoice: {id}</p>
      </div>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Customer</label>
          <input type="text" className="border p-2 rounded w-full" defaultValue="Customer Name" />
        </div>
        <div>
          <label className="block text-sm font-medium">Amount</label>
          <input type="number" className="border p-2 rounded w-full" defaultValue="100" />
        </div>
        <div>
          <label className="block text-sm font-medium">Status</label>
          <select className="border p-2 rounded w-full">
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
      </form>
    </main>
  );
}