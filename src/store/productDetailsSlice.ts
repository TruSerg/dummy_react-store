import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { IProduct } from "../services/products";

import api from "../http";

interface ProductState {
  product: IProduct;
  error: string | null;
  isError: boolean;
  isLoading: boolean;
}

const initialState: ProductState = {
  product: {} as IProduct,
  error: null,
  isError: false,
  isLoading: false,
};

export const getProductDetails = createAsyncThunk(
  "getProduct/getProductDetails",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await api.get(`products/${id}`);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
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
    });
    builder.addCase(
      getProductDetails.fulfilled,
      (state: ProductState, action: PayloadAction<IProduct>) => {
        state.isLoading = false;
        state.product = action.payload;
      }
    );
    builder.addCase(
      getProductDetails.rejected,
      (state: ProductState, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      }
    );
  },
});

export default productDetailsSlice.reducer;
