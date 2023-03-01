import { configureStore } from "@reduxjs/toolkit";

import { dummyStoreAPI } from "./dummyStoreAPI/dummyStore.api";
import productDetailsReducer from "./productDetailsSlice";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(dummyStoreAPI.middleware),
  reducer: {
    [dummyStoreAPI.reducerPath]: dummyStoreAPI.reducer,
    productDetails: productDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
