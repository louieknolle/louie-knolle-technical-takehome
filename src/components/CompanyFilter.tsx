// CompanyFilter.tsx
import React, { useContext } from 'react';
import { CustomerContext } from '@/context/CustomerContext';
import { Autocomplete, TextField } from '@mui/material';

const CompanyFilter = () => {
  const { companyFilter, setCompanyFilter, customersList } =
    useContext(CustomerContext);

  const companyOptions = [
    ...new Set(customersList.map((customer) => customer.companyName)),
  ];

  const handleCompanyChange = (
    event: React.ChangeEvent<{}>,
    newValue: string[] | null,
  ) => {
    setCompanyFilter(newValue || []);
  };

  return (
    <div className="p-4">
      <label
        htmlFor="company-autocomplete"
        className="block text-lg font-semibold"
      >
        Filter by company
      </label>
      <Autocomplete
        options={companyOptions}
        value={companyFilter}
        onChange={handleCompanyChange}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" id="company-autocomplete" />
        )}
        aria-labelledby="company-autocomplete"
        sx={{ minWidth: '18rem' }}
        multiple
      />
    </div>
  );
};

export default CompanyFilter;
