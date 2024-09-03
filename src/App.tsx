import CompanyFilter from './components/CompanyFilter';
import CustomerDataGrid from './components/customerDataGrid/CustomerDataGrid';
import ResetFiltersButton from './components/ResetFiltersButton';
import SearchInput from './components/SeachInput';
import SortOptions from './components/SortingOptions';

const App = () => {
  return (
    <>
      <h1 className="p-4 text-center text-4xl">Customer Manager</h1>
      <div className="flex flex-col justify-center">
        <div className="flex flex-wrap items-center justify-center">
          <SearchInput />
          <CompanyFilter />
          <SortOptions />
          <ResetFiltersButton />
        </div>
        <CustomerDataGrid />
      </div>
    </>
  );
};

export default App;
