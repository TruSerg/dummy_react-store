import { createSlice } from "@reduxjs/toolkit";

import { IProduct } from "../services/products";

interface OrderState {
  userOrderTotalPrice: number;
  ordersList: {
    id: string;
    userOrderTotalPrice: number;
    cartList: IProduct[];
  }[];
}

const initialState: OrderState = {
  userOrderTotalPrice: 0,
  ordersList: [],
};

const userOrderSlice = createSlice({
  name: "userOrder",
  initialState,
  reducers: {
    createOrder(state, { payload }) {
      state.ordersList.push(payload);
    },
    createOrderTotalPrice(state, { payload }) {
      state.userOrderTotalPrice = payload;
    },
  },
});

export const { createOrder, createOrderTotalPrice } = userOrderSlice.actions;

export default userOrderSlice.reducer;
