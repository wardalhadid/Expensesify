import { createSlice } from '@reduxjs/toolkit';

export const sortExpensesSlice = createSlice({
  name: 'sortExpenses',
  initialState: {
    sort: "date"
  },
  reducers: {
    sortBy: (state, action) =>{
        state.sort = action.payload
    }
}
})

// Action creators are generated for each case reducer function
export const { sortBy } = sortExpensesSlice.actions

export default sortExpensesSlice.reducer