import { createSlice } from "@reduxjs/toolkit";

const initialState = ["детективы"];

const categoriesSlice = createSlice({
  name: "category",
  initialState: initialState,
});

export default categoriesSlice.reducer;
