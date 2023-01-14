import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "list",
  initialState: {
    value: [],
  },
  reducers: {
    addToList: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    removeFromList: (state, action) => {
      // Do I need to check for ID on this?
      state.value = state.value.filter((item) => item !== action.payload);
    },
  },
});

export const { addToList, removeFromList } = listSlice.actions;

export default listSlice.reducer;
