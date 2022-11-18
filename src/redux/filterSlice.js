import { createSlice } from '@reduxjs/toolkit';

const filerSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setFilter } = filerSlice.actions;
export const filterReducer = filerSlice.reducer;
