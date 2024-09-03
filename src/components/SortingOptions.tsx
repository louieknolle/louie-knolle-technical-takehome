import React, { useContext } from 'react';
import { CustomerContext } from '@/context/CustomerContext';

const SortOptions = () => {
  const { sortField, setSortField, sortOrder, setSortOrder } =
    useContext(CustomerContext);

  const handleSortFieldChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSortField(
      event.target.value as 'firstName' | 'lastName' | 'companyName',
    );
  };

  const handleSortOrderChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSortOrder(event.target.value as 'asc' | 'desc');
  };

  return (
    <div className="flex items-center space-x-4 p-4">
      <label htmlFor="sort-field" className="text-lg font-semibold">
        Sort by:
      </label>
      <select
        id="sort-field"
        value={sortField}
        onChange={handleSortFieldChange}
        className="rounded border border-gray-300 p-2"
      >
        <option value="firstName">First Name</option>
        <option value="lastName">Last Name</option>
        <option value="companyName">Company Name</option>
      </select>

      <label htmlFor="sort-order" className="text-lg font-semibold">
        Order:
      </label>
      <select
        id="sort-order"
        value={sortOrder}
        onChange={handleSortOrderChange}
        className="rounded border border-gray-300 p-2"
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default SortOptions;
