import React, {
  PropsWithChildren,
  createContext,
  useState,
  useMemo,
} from 'react';
import customers from '../data/customers.json';

export interface Customer {
  firstName: string;
  lastName: string;
  companyName: string;
  id: number;
}

type SortOrder = 'asc' | 'desc';
type SortField = 'firstName' | 'lastName' | 'companyName';

interface CustomerContextValue {
  searchInputValue: string;
  setSearchInputValue: React.Dispatch<React.SetStateAction<string>>;
  customersList: Customer[];
  setCustomersList: React.Dispatch<React.SetStateAction<Customer[]>>;
  selectedCustomer: Customer | undefined;
  setSelectedCustomer: React.Dispatch<
    React.SetStateAction<Customer | undefined>
  >;
  companyFilter: string[];
  setCompanyFilter: React.Dispatch<React.SetStateAction<string[]>>;
  sortField: SortField;
  setSortField: React.Dispatch<React.SetStateAction<SortField>>;
  sortOrder: SortOrder;
  setSortOrder: React.Dispatch<React.SetStateAction<SortOrder>>;
  filteredAndSortedCustomers: Customer[];
  resetFilters: () => void;
}

export const CustomerContext = createContext<CustomerContextValue>(
  {} as CustomerContextValue,
);

export const CustomerProvider = ({ children }: PropsWithChildren) => {
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [customersList, setCustomersList] = useState<Customer[]>(customers);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer>();
  const [companyFilter, setCompanyFilter] = useState<string[]>([]);
  const [sortField, setSortField] = useState<SortField>('firstName');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  const resetFilters = () => {
    setSearchInputValue('');
    setCompanyFilter([]);
    setSortField('firstName');
    setSortOrder('asc');
  };

  const filteredAndSortedCustomers = useMemo(() => {
    let filtered = [...customersList];

    if (searchInputValue.trim()) {
      filtered = filtered.filter((customer) =>
        `${customer.firstName} ${customer.lastName}`
          .toLowerCase()
          .includes(searchInputValue.toLowerCase()),
      );
    }

    if (companyFilter.length > 0) {
      filtered = filtered.filter((customer) =>
        companyFilter.includes(customer.companyName),
      );
    }

    filtered.sort((a, b) => {
      const fieldA = a[sortField].toLowerCase();
      const fieldB = b[sortField].toLowerCase();

      if (sortOrder === 'asc') {
        return fieldA > fieldB ? 1 : -1;
      } else {
        return fieldA < fieldB ? 1 : -1;
      }
    });

    return filtered;
  }, [customersList, searchInputValue, companyFilter, sortField, sortOrder]);

  return (
    <CustomerContext.Provider
      value={{
        searchInputValue,
        setSearchInputValue,
        customersList,
        setCustomersList,
        selectedCustomer,
        setSelectedCustomer,
        companyFilter,
        setCompanyFilter,
        sortField,
        setSortField,
        sortOrder,
        setSortOrder,
        filteredAndSortedCustomers,
        resetFilters,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};
