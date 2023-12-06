import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  isLoading: false,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,

  reducers: {
    fetchCategories: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { fetchCategories } = categoriesSlice.actions;

export const selectCategories = (state) => state.categories.list;

export default categoriesSlice.reducer;
