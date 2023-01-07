import { configureStore } from '@reduxjs/toolkit'
import expensesReducer from '../features/expensesReducer'

export default configureStore({
  reducer: {
    expenses: expensesReducer
  },
})