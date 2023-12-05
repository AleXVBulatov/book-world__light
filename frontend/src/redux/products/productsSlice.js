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

export const { getRelatedProducts, fetchProducts } = productsSlice.actions;

export const selectProducts = (state) => state.products.list;
export const selectProductsRelatedByAuthor = (state) => state.products.related;

export default productsSlice.reducer;

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   list: [],
//   related: [],
//   isLoading: false,
// };

// export const fetchProducts = createAsyncThunk("products/fetchProducts", async (url, thunkAPI) => {
//   try {
//     const res = await axios.get(url);
//     return res.data;
//   } catch (err) {
//     return thunkAPI.rejectWithValue(err);
//   }
// });

// const productsSlice = createSlice({
//   name: "products",
//   initialState: initialState,
//   reducers: {
//     getRelatedProducts: (state, action) => {
//       state.related = state.list.filter((product) => product.author === action.payload);
//     },
//   },

//   extraReducers: (builder) => {
//     builder.addCase(fetchProducts.pending, (state) => {
//       state.isLoading = true;
//     });
//     builder.addCase(fetchProducts.fulfilled, (state, action) => {
//       state.list.push(...action.payload);
//       state.isLoading = false;
//     });
//     builder.addCase(fetchProducts.rejected, (state) => {
//       state.isLoading = false;
//       console.log("Ошибка");
//     });
//   },
// });

// export const { getRelatedProducts } = productsSlice.actions;

// export const selectProducts = (state) => state.products.list;
// export const selectProductsRelatedByAuthor = (state) => state.products.related;

// export default productsSlice.reducer;
