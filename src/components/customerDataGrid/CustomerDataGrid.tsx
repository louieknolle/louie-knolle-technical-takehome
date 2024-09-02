import { useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { CustomerContext } from '../../context/CustomerContext';
import columns from './columns';

const CustomerDataGrid = () => {
  const { filteredAndSortedCustomers, setSelectedCustomer, searchInputValue } =
    useContext(CustomerContext);

  return (
    <div style={{ height: '55vh', width: '60%', margin: 'auto' }}>
      <DataGrid
        rows={filteredAndSortedCustomers}
        columns={columns}
        onRowClick={(row) => setSelectedCustomer(row.row)}
        disableColumnMenu
        disableColumnSorting
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[5, 10, 25, 50]}
      />
    </div>
  );
};

export default CustomerDataGrid;
