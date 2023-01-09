import { configureStore } from '@reduxjs/toolkit'
import expensesReducer from '../features/expensesReducer'
import filterExpensesReducer from '../features/filterExpensesReducer'

export default configureStore({
  reducer: {
    expenses: expensesReducer,
    filterExpenses: filterExpensesReducer
  },
})