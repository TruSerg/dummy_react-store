import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import api from "../http";

interface CategoriesState {
  categories: string[];
  category: string;
  error: string;
  isLoading: boolean;
}

const initialState: CategoriesState = {
  categories: [],
  category: "",
  error: "",
  isLoading: false,
};

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get(`products/categories`);

      const data = res.data;

      return data;
    } catch (e) {
      // rejectWithValue(e.message);
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
      state.error = "";
    });
    builder.addCase(
      getCategories.fulfilled,
      (state: CategoriesState, action: PayloadAction<string[]>) => {
        state.isLoading = false;
        state.error = "";
        state.categories = action.payload;
      }
    );
    builder.addCase(getCategories.rejected, (state: CategoriesState) => {
      state.isLoading = false;
    });
  },
});

export const { getCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
