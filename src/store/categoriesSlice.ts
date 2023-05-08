import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import api from "../http";

interface CategoriesState {
  categories: string[];
  category: string;
  error: string | null;
  isError: boolean;
  isLoading: boolean;
}

const initialState: CategoriesState = {
  categories: [],
  category: "",
  error: null,
  isError: false,
  isLoading: false,
};

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("products/categories");

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    getCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state: CategoriesState) => {
      state.isLoading = true;
    });
    builder.addCase(
      getCategories.fulfilled,
      (state: CategoriesState, action: PayloadAction<string[]>) => {
        state.isLoading = false;
        state.categories = action.payload;
      }
    );
    builder.addCase(
      getCategories.rejected,
      (state: CategoriesState, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      }
    );
  },
});

export const { getCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
