import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { ServerResponse } from "../services/products";

import api from "../http";

interface SearchProductState {
  searchedProducts: ServerResponse;
  productSearchValue: string;
  error: string | null;
  isError: boolean;
  isLoading: boolean;
}

const initialState: SearchProductState = {
  searchedProducts: {} as ServerResponse,
  productSearchValue: "",
  error: null,
  isError: false,
  isLoading: false,
};

export const searchProduct = createAsyncThunk(
  "search/searchProduct",
  async (inputValue: string, { rejectWithValue }) => {
    try {
      const response = await api.get(`/products/search?q=${inputValue}`);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const searchProductSlice = createSlice({
  name: "searchProduct",
  initialState,
  reducers: {
    productSearchValueChange(
      state: SearchProductState,
      action: PayloadAction<string>
    ) {
      state.productSearchValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchProduct.pending, (state: SearchProductState) => {
      state.isLoading = true;
    });
    builder.addCase(
      searchProduct.fulfilled,
      (state: SearchProductState, action: PayloadAction<ServerResponse>) => {
        state.isLoading = false;
        state.searchedProducts = action.payload;
      }
    );
    builder.addCase(
      searchProduct.rejected,
      (state: SearchProductState, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      }
    );
  },
});

export const { productSearchValueChange } = searchProductSlice.actions;

export default searchProductSlice.reducer;
