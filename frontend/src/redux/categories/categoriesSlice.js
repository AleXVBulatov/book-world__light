import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  list: [],
  isLoading: false,
};

export const fetchCategories = createAsyncThunk("categories/fetchCategory", async (url, thunkAPI) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    console.log(err);
    return thunkAPI.rejectWithValue(err);
  }
});

const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.list.push(action.payload);
      state.isLoading = false;
    });
    builder.addCase(fetchCategories.rejected, (state) => {
      state.isLoading = false;
      console.log("Ошибка fetch");
    });
  },
});

export const selectCategories = (state) => state.categories.list;

export default categoriesSlice.reducer;
