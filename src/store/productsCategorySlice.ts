import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { ServerResponse } from "../services/products";

import api from "../http";

interface ProductsCategoryState {
  productsCategory: ServerResponse;
  error: string;
  isLoading: boolean;
}

const initialState: ProductsCategoryState = {
  productsCategory: <ServerResponse>{},
  error: "",
  isLoading: false,
};

export const getProductsCategory = createAsyncThunk(
  "getCategory/getProductsCategory",
  async (category: string, { rejectWithValue }) => {
    try {
      const res = await api.get(`products/category/${category}`);

      const data = res.data;

      return data;
    } catch (e) {
      // rejectWithValue(e.message);
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
        state.error = "";
      }
    );
    builder.addCase(
      getProductsCategory.fulfilled,
      (state: ProductsCategoryState, action: PayloadAction<ServerResponse>) => {
        state.isLoading = false;
        state.error = "";
        state.productsCategory = action.payload;
      }
    );
    builder.addCase(
      getProductsCategory.rejected,
      (state: ProductsCategoryState) => {
        state.isLoading = false;
      }
    );
  },
});

export default productsCategorySlice.reducer;
