import { useContext } from 'react';
import { CustomerContext } from '@/context/CustomerContext';

const ResetFiltersButton = () => {
  const { resetFilters } = useContext(CustomerContext);

  return (
    <div className="p-4">
      <button
        onClick={resetFilters}
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default ResetFiltersButton;
