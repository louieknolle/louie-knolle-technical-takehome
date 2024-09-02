import { Customer } from '@/context/CustomerContext';
import { GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', minWidth: 70, maxWidth: 100, flex: 1 },
  {
    field: 'fullName',
    headerName: 'Name',
    minWidth: 150,
    maxWidth: 300,
    flex: 1,
    valueGetter: (value, row: Customer) => {
      return `${row.firstName || ''} ${row.lastName || ''}`;
    },
  },

  { field: 'companyName', headerName: 'Company name', width: 200 },
];

export default columns;
