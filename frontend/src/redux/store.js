import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";

import categoryReducer from "./categories/categoriesSlice";
import productsReducer from "./products/productsSlice";

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    products: productsReducer,

    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware),
});

export default store;
