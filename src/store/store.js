import { configureStore } from '@reduxjs/toolkit';
import expensesReducer from '../slices/expensesReducer';
import filterExpensesReducer from '../slices/filterExpensesReducer';
import sortExpensesReducer from '../slices/sortExpensesReducer';
import userReducer from '../slices/userReducer';

export default configureStore({
  reducer: {
    expenses: expensesReducer,
    filterExpenses: filterExpensesReducer,
    sortExpenses: sortExpensesReducer,
    user: userReducer
  },
})