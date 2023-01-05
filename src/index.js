import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Routes/App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Routes/Login';
import AddExpense from './Routes/AddExpense';
import Expenses from "./Routes/Expenses";
import ErrorPage from "./ErrorPage";
import ReceiptHub from './Routes/ReceiptHub';
import EditExpense from './Routes/EditExpense';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/add-expense",
    element: <AddExpense />,
    errorElement: <ErrorPage />,
  },
    {
      path: "/receipt-hub",
      element: <ReceiptHub />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/expenses",
      element: <Expenses />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/expenses/:id",
      element: <EditExpense />,
      errorElement: <ErrorPage />,
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
