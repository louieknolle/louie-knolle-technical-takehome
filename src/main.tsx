// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css';
// import { CustomerProvider } from './context/CustomerContext';

// const rootElement = document.getElementById('root') as HTMLElement;
// const root = ReactDOM.createRoot(rootElement);

// root.render(
//   <CustomerProvider>
//     <App />
//   </CustomerProvider>,
// );
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { CustomerProvider } from './context/CustomerContext';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <BrowserRouter>
    <CustomerProvider>
      <App />
    </CustomerProvider>
  </BrowserRouter>,
);
