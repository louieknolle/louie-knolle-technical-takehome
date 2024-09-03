import React, {
  PropsWithChildren,
  createContext,
  useState,
  useMemo,
  useEffect,
  useRef,
} from 'react';
import customers from '../data/customers.json';
import { useLocation, useNavigate } from 'react-router-dom';

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

  const location = useLocation();
  const navigate = useNavigate();
  const isFirstRender = useRef(true);

  const resetFilters = () => {
    setSearchInputValue('');
    setCompanyFilter([]);
    setSortField('firstName');
    setSortOrder('asc');
    navigate('?');
  };

  // insert search, filter and sort params into URL
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchInputValue) params.set('search', searchInputValue);
    if (companyFilter.length > 0)
      params.set('companies', companyFilter.join(','));
    if (sortField) params.set('sortField', sortField);
    if (sortOrder) params.set('sortOrder', sortOrder);

    navigate(`?${params.toString()}`, { replace: true });
  }, [searchInputValue, companyFilter, sortField, sortOrder, navigate]);

  // read search, filter and sort params from URL and set state
  useEffect(() => {
    if (isFirstRender.current) {
      const params = new URLSearchParams(location.search);
      const search = params.get('search') || '';
      const companies = params.get('companies')?.split(',') || [];
      const field = (params.get('sortField') as SortField) || 'firstName';
      const order = (params.get('sortOrder') as SortOrder) || 'asc';

      setSearchInputValue(search);
      setCompanyFilter(companies);
      setSortField(field);
      setSortOrder(order);

      isFirstRender.current = false;
    }
  }, [location.search]);

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
