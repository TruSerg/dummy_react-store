import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { ServerResponse } from "../services/products";

import api from "../http";

interface SearchProductState {
  searchedProducts: ServerResponse;
  productSearchValue: string;
  error: string;
  isLoading: boolean;
}

const initialState: SearchProductState = {
  searchedProducts: <ServerResponse>{},
  productSearchValue: "",
  error: "",
  isLoading: false,
};

export const searchProduct = createAsyncThunk(
  "search/searchProduct",
  async (inputValue: string, { rejectWithValue }) => {
    try {
      const res = await api.get(`/products/search?q=${inputValue}`);

      const data = res.data;

      return data;
    } catch (e) {
      // rejectWithValue(e.message);
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
      state.error = "";
    });
    builder.addCase(
      searchProduct.fulfilled,
      (state: SearchProductState, action: PayloadAction<ServerResponse>) => {
        state.isLoading = false;
        state.error = "";
        state.searchedProducts = action.payload;
      }
    );
    builder.addCase(searchProduct.rejected, (state: SearchProductState) => {
      state.isLoading = false;
    });
  },
});

export const { productSearchValueChange } = searchProductSlice.actions;

export default searchProductSlice.reducer;
