import { useContext } from 'react';
import { CustomerContext } from './context/CustomerContext';

const App = () => {
  const { customersList } = useContext(CustomerContext);

  return (
    <>
      <h1 className="p-4 text-center text-4xl">Customer App</h1>
      <div className="flex flex-wrap justify-center">
        {customersList.map((customer) => (
          <div
            key={customer.id}
            className="m-4 flex flex-col items-center rounded-lg bg-gray-100 p-4"
          >
            <h2 className="text-xl font-semibold">
              {customer.firstName} {customer.lastName}
            </h2>
            <p className="text-lg">{customer.companyName}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
