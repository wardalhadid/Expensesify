import { createSlice } from '@reduxjs/toolkit';

export const filterExpensesSlice = createSlice({
  name: 'filterExpenses',
  initialState: {
    filter: ""
  },
  reducers: {
    filter: (state, action) =>{
        state.filter = action.payload
    }
}
})

// Action creators are generated for each case reducer function
export const { filter } = filterExpensesSlice.actions

export default filterExpensesSlice.reducer