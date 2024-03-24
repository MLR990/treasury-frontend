import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import { BudgetsPage, HomePage, RootLayout, TransactionsPage } from './views';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'transactions', element: <TransactionsPage /> },
      { path: 'budgets', element: <BudgetsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
