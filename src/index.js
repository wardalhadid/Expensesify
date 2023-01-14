import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Routes/App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddExpense from './Routes/AddExpense';
import Expenses from "./Routes/Expenses";
import ErrorPage from "./ErrorPage";
import EditExpense from './Routes/EditExpense';
import Login from './Routes/Login';
import { Provider } from 'react-redux'
import store from './store/store'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:user",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:user/add-expense",
    element: <AddExpense />,
    errorElement: <ErrorPage />,
  },
    {
      path: "/:user/expenses",
      element: <Expenses />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/:user/expenses/:id",
      element: <EditExpense />,
      errorElement: <ErrorPage />,
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
