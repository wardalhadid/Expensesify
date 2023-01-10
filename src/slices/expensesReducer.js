import { createSlice } from '@reduxjs/toolkit';
import {v4 as uuid } from 'uuid';

export const expensesSlice = createSlice({
  name: 'expenses',
  initialState: [
    {name: "Rent",
   amount: 1200,
   category: "Rent",
   date: "2022-01-01",
   id: uuid()
   },
   {name: "Energy",
   amount: 200,
   category: "Utilities",
   date: "2022-01-05",
   id: uuid()
   },
   {name: "Car Payment",
   amount: 550,
   category: "Tranportation",
   date: "2022-01-16",
   id: uuid()
   }
  ],
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
export const { add, remove, edit } = expensesSlice.actions

export default expensesSlice.reducer