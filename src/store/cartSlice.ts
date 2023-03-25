import { createSlice } from "@reduxjs/toolkit";

import { IProduct } from "../services/products";

interface CartState {
  cartList: IProduct[];
  totalPrice: number;
  isLoading: boolean;
}

const initialState: CartState = {
  cartList: [],
  totalPrice: 0,
  isLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart(state, { payload }) {
      state.cartList.push(payload);
    },
    deleteProductFromCart(state, { payload }) {
      const removeItem = state.cartList.findIndex(
        (item) => item.id === payload
      );
      state.cartList.splice(removeItem, 1);
    },
    cartItemChange(state, { payload }) {
      const changeItem = state.cartList.findIndex(
        (item) => payload.id === item.id
      );

      state.cartList.splice(changeItem, 1, payload);
    },
    cartTotalSum(state) {
      state.cartList.reduce((acc, item) => {
        return (state.totalPrice = acc + item.price * item.quantity);
      }, 0);
    },
  },
});

export const {
  addProductToCart,
  deleteProductFromCart,
  cartItemChange,
  cartTotalSum,
} = cartSlice.actions;
export default cartSlice.reducer;