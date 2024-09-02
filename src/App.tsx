import CustomerDataGrid from './components/customerDataGrid/CustomerDataGrid';
import SearchInput from './components/SeachInput';

const App = () => {
  return (
    <>
      <h1 className="p-4 text-center text-4xl">Customer App</h1>
      <div className="flex flex-col justify-center">
        <div className="flex justify-center">
          <SearchInput />
        </div>
        <CustomerDataGrid />
      </div>
    </>
  );
};

export default App;
