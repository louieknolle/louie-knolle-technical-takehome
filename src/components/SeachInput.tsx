import React, { useContext } from 'react';
import { CustomerContext } from '@/context/CustomerContext';

const SearchInput = () => {
  const { searchInputValue, setSearchInputValue } = useContext(CustomerContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(event.target.value);
  };

  return (
    <div className="p-4">
      <label htmlFor="search" className="block text-lg font-semibold">
        Search by Customer Name
      </label>
      <input
        type="text"
        value={searchInputValue}
        onChange={handleChange}
        placeholder="Jora Doe"
        className="w-60 rounded border border-gray-300 p-[15px]"
      />
    </div>
  );
};

export default SearchInput;
