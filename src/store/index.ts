import { configureStore } from "@reduxjs/toolkit";

// import { dummyStoreAPI } from "./dummyStoreAPI/dummyStore.api";
import productDetailsReducer from "./productDetailsSlice";
import categoriesReducer from "./categoriesSlice";
import productsCategoryReducer from "./productsCategorySlice";
import searchProductReducer from "./searchProductSlice";
import productsReducer from "./productsSlice";
import cartReducer from "./cartSlice";
import signupUserReducer from "./signupSlice";
import userOrderReducer from "./userOrderSlice";

export const store = configureStore({
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }).concat(dummyStoreAPI.middleware),
  reducer: {
    // [dummyStoreAPI.reducerPath]: dummyStoreAPI.reducer,
    products: productsReducer,
    productDetails: productDetailsReducer,
    categories: categoriesReducer,
    productsCategory: productsCategoryReducer,
    searchProduct: searchProductReducer,
    cart: cartReducer,
    signupUser: signupUserReducer,
    userOrder: userOrderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
