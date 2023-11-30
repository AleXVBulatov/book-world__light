import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  list: [],
  // filtered: [], // не используется
  related: [],
  isLoading: false,
};

export const fetchProducts = createAsyncThunk("products/fetchProducts", async (url, thunkAPI) => {
  try {
    const res = await axios.get(url);
    return res.data;
    // return res.data.map((book) => {
    //   return { book: { ...book }, favourite: false };
    // });
  } catch (err) {
    console.log(err);
    return thunkAPI.rejectWithValue(err);
  }
});

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    // filterByCategory: (state, action) => {
    //   state.filtered = state.list.filter((product) => product.category.id === action.payload);
    // },
    getRelatedProducts: (state, action) => {
      state.related = state.list.filter((product) => product.author === action.payload);
    },
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

// export const { filterByCategory, getRelatedProducts, getProduct, getFilteredProducts } = productsSlice.actions;
export const { getRelatedProducts, getProduct } = productsSlice.actions;

export const selectProducts = (state) => state.products.list;
export const selectProductsRelatedByAuthor = (state) => state.products.related;
// export const selectProductsfilterByCategory = (state) => state.products.filtered;

export default productsSlice.reducer;
