import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
      name: "",
  },
  reducers: {
    contactsFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { contactsFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;