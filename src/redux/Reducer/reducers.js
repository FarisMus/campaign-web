import { createSlice } from '@reduxjs/toolkit'

export const searchResult = createSlice({
  name: 'campaigns',
  initialState: {
    sortBy: ''
  },
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload
    }
  },
});

export const { setSortBy } = searchResult.actions;

export default searchResult.reducer
