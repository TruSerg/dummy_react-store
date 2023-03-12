import { configureStore } from "@reduxjs/toolkit";

import { dummyStoreAPI } from "./dummyStoreAPI/dummyStore.api";
import productDetailsReducer from "./productDetailsSlice";
import categoriesReducer from "./categoriesSlice";
import productsCategoryReducer from "./productsCategorySlice";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(dummyStoreAPI.middleware),
  reducer: {
    [dummyStoreAPI.reducerPath]: dummyStoreAPI.reducer,
    productDetails: productDetailsReducer,
    categories: categoriesReducer,
    productsCategory: productsCategoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
