import { configureStore } from '@reduxjs/toolkit';
import expensesReducer from '../slices/expensesReducer';
import filterExpensesReducer from '../slices/filterExpensesReducer';
import sortExpensesReducer from '../slices/sortExpensesReducer';

export default configureStore({
  reducer: {
    expenses: expensesReducer,
    filterExpenses: filterExpensesReducer,
    sortExpenses: sortExpensesReducer,
  },
})