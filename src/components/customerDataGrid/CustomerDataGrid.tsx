import { useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { CustomerContext } from '../../context/CustomerContext';
import columns from './columns';

const CustomerDataGrid = () => {
  const { filteredAndSortedCustomers, setSelectedCustomer } =
    useContext(CustomerContext);

  return (
    <div style={{ height: 'full', width: '60%', margin: 'auto' }}>
      <DataGrid
        rows={filteredAndSortedCustomers}
        columns={columns}
        onRowClick={(row) => setSelectedCustomer(row.row)}
        disableColumnMenu
        disableColumnSorting
        initialState={{
          sorting: {
            sortModel: [{ field: 'id', sort: 'asc' }],
          },
          pagination: { paginationModel: { pageSize: 10 } },
        }}
      />
    </div>
  );
};

export default CustomerDataGrid;
