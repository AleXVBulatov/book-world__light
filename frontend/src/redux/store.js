import { configureStore, combineReducers } from "@reduxjs/toolkit";

import categoryReducer from "./categories/categoriesSlice";
import productsReducer from "./products/productsSlice";
import userSlice from "./user/userSlice";
import { apiSlice } from "./api/apiSlice";

// Для работы localStorage:
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  categories: categoryReducer,
  products: productsReducer,
  user: userSlice,

  [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistConfig = {
  key: "user",
  storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
});

export const persistor = persistStore(store);

export default store;

// Без redux-persist
// import { configureStore } from "@reduxjs/toolkit";

// import categoryReducer from "./categories/categoriesSlice";
// import productsReducer from "./products/productsSlice";
// import userSlice from "./user/userSlice";
// import { apiSlice } from "./api/apiSlice";

// const store = configureStore({
//   reducer: {
//     categories: categoryReducer,
//     products: productsReducer,
//     user: userSlice,

//     [apiSlice.reducerPath]: apiSlice.reducer, // не использую!!
//   },
//   middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware), // не использую!!
// });

// export default store;
