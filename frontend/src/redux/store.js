import { configureStore } from "@reduxjs/toolkit";

import categoryReducer from "./categories/categoriesSlice";
import productsReducer from "./products/productsSlice";

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    products: productsReducer,
  },
});

export default store;
