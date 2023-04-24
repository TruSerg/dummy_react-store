import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { ServerResponse } from "../services/products";

import api from "../http";

interface ProductsCategoryState {
  productsResponse: ServerResponse;
  error: string;
  isLoading: boolean;
}

const initialState: ProductsCategoryState = {
  productsResponse: {} as ServerResponse,
  error: "",
  isLoading: false,
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/products?limit=0");

      const data = res.data;

      return data;
    } catch (e) {
      // rejectWithValue(e.message);
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
      state.error = "";
    });
    builder.addCase(
      getProducts.fulfilled,
      (state: ProductsCategoryState, action: PayloadAction<ServerResponse>) => {
        state.isLoading = false;
        state.error = "";
        state.productsResponse = action.payload;
      }
    );
    builder.addCase(getProducts.rejected, (state: ProductsCategoryState) => {
      state.isLoading = false;
    });
  },
});

export default productsSlice.reducer;
