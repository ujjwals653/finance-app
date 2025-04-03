import CustomersTable from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';

const Page = async (props: {
  searchParams? : Promise<{
    query?: string,
  }>
}
) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const customers = await fetchFilteredCustomers(query);

  return (
    <CustomersTable customers={customers}/>
  );
};

export default Page;
