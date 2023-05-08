import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { ServerResponse } from "../services/products";

import api from "../http";

interface ProductsCategoryState {
  productsResponse: ServerResponse;
  error: null | string;
  isError: boolean;
  isLoading: boolean;
}

const initialState: ProductsCategoryState = {
  productsResponse: {} as ServerResponse,
  error: null,
  isError: false,
  isLoading: false,
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/products?limit=0");

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state: ProductsCategoryState) => {
      state.isLoading = true;
    });
    builder.addCase(
      getProducts.fulfilled,
      (state: ProductsCategoryState, action: PayloadAction<ServerResponse>) => {
        state.isLoading = false;
        state.productsResponse = action.payload;
      }
    );
    builder.addCase(
      getProducts.rejected,
      (state: ProductsCategoryState, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      }
    );
  },
});

export default productsSlice.reducer;
