import { configureStore } from "@reduxjs/toolkit";

import categoryReducer from "./categories/categoriesSlice";
import productsReducer from "./products/productsSlice";
import userSlice from "./user/userSlice";
import { apiSlice } from "./api/apiSlice";

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    products: productsReducer,
    user: userSlice,

    [apiSlice.reducerPath]: apiSlice.reducer, // не использую!!
  },
  middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware), // не использую!!
});

export default store;
