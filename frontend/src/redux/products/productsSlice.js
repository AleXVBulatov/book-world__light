import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  list: [],
  filtered: [],
  // product: [],
  related: [],
  isLoading: false,
};

export const fetchProducts = createAsyncThunk("products/fetchProducts", async (url, thunkAPI) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    console.log(err);
    return thunkAPI.rejectWithValue(err);
  }
});

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    filterByCategory: (state, action) => {
      state.filtered = state.list.filter((product) => product.category.id === action.payload);
    },
    // getProduct: (state, action) => {
    //   state.product = state.list.filter((product) => product.id === action.payload);
    // },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.list.push(...action.payload);
      state.isLoading = false;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.isLoading = false;
      console.log("Ошибка");
    });
  },
});

export const { filterByCategory, getProduct } = productsSlice.actions;

export const selectProducts = (state) => state.products.list;
export const selectProductsfilterByCategory = (state) => state.products.filtered;
// export const selectProductById = (state) => state.products.product;

export default productsSlice.reducer;
