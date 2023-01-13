import { createSlice } from '@reduxjs/toolkit';

export const expensesSlice = createSlice({
  name: 'expenses',
    initialState: [],
  reducers: {
    add: (state, action) => {
      state = state.push(action.payload);
    },
    remove: (state, action) => {
       state = state.splice(state.findIndex(expense => expense.id === action.payload), 1)
  },
    edit: (state, action) => {
      const expense = state.find(expense => expense.id === action.payload.id)
       const editedExpense = {
        name: (action.payload.hasOwnProperty('name')) ? action.payload.name : expense.name,
        amount: (action.payload.hasOwnProperty('amount')) ? action.payload.amount : expense.amount,
        category: (action.payload.hasOwnProperty('category')) ? action.payload.category : expense.category,
        date: (action.payload.hasOwnProperty('date')) ? action.payload.date : expense.date,
        id: action.payload.id
       }
       state = state.splice(state.findIndex(expense => expense.id === action.payload.id), 1, editedExpense)
    },
}
})

// Action creators are generated for each case reducer function
export const { add, remove, edit, importFromDB } = expensesSlice.actions

export default expensesSlice.reducer