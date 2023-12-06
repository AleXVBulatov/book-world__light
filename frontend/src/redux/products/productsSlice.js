import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  related: [],
  isLoading: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    fetchProducts: (state, action) => {
      state.list = action.payload;
    },
    getRelatedProducts: (state, action) => {
      state.related = state.list.filter((product) => product.author === action.payload);
    },
  },
});

export const { getRelatedProducts, fetchProducts, getProductsWithParams } = productsSlice.actions;

export const selectProducts = (state) => state.products.list;
export const selectProductsRelatedByAuthor = (state) => state.products.related;

export default productsSlice.reducer;
