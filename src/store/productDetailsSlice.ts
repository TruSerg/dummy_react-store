import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { IProduct } from "../services/products";

import api from "../http";

interface ProductState {
  product: IProduct;
  error: string;
  isLoading: boolean;
}

const initialState: ProductState = {
  product: {} as IProduct,
  error: "",
  isLoading: false,
};

export const getProductDetails = createAsyncThunk(
  "getProduct/getProductDetails",
  async (id: number, { rejectWithValue }) => {
    try {
      const res = await api.get(`products/${id}`);

      const data = res.data;

      return data;
    } catch (e) {
      // rejectWithValue(e.message);
    }
  }
);

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductDetails.pending, (state: ProductState) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(
      getProductDetails.fulfilled,
      (state: ProductState, action: PayloadAction<IProduct>) => {
        state.isLoading = false;
        state.error = "";
        state.product = action.payload;
      }
    );
    builder.addCase(getProductDetails.rejected, (state: ProductState) => {
      state.isLoading = false;
    });
  },
});

export default productDetailsSlice.reducer;
