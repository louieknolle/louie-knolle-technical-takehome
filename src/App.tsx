import CustomerDataGrid from './components/customerDataGrid/CustomerDataGrid';

const App = () => {
  return (
    <>
      <h1 className="p-4 text-center text-4xl">Customer App</h1>
      <div className="flex flex-wrap justify-center">
        <CustomerDataGrid />
      </div>
    </>
  );
};

export default App;
