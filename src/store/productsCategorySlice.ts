import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { ServerResponse } from "../services/products";

import api from "../http";

interface ProductsCategoryState {
  productsCategory: ServerResponse;
  error: string | null;
  isError: boolean;
  isLoading: boolean;
}

const initialState: ProductsCategoryState = {
  productsCategory: {} as ServerResponse,
  error: null,
  isError: false,
  isLoading: false,
};

export const getProductsCategory = createAsyncThunk(
  "getCategory/getProductsCategory",
  async (category: string, { rejectWithValue }) => {
    try {
      const response = await api.get(`products/category/${category}`);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const productsCategorySlice = createSlice({
  name: "productsCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getProductsCategory.pending,
      (state: ProductsCategoryState) => {
        state.isLoading = true;
      }
    );
    builder.addCase(
      getProductsCategory.fulfilled,
      (state: ProductsCategoryState, action: PayloadAction<ServerResponse>) => {
        state.isLoading = false;
        state.productsCategory = action.payload;
      }
    );
    builder.addCase(
      getProductsCategory.rejected,
      (state: ProductsCategoryState, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      }
    );
  },
});

export default productsCategorySlice.reducer;
