import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { ISignupFormData } from "../services/formData";

import api from "../http";

interface SignupUserState {
  userInfo: ISignupFormData;
  isAuth: boolean;
  error: string | null;
  isError: boolean;
  isLoading: boolean;
}

const initialState: SignupUserState = {
  userInfo: {} as ISignupFormData,
  isAuth: false,
  error: null,
  isError: false,
  isLoading: false,
};

export const signupUser = createAsyncThunk(
  "signup/signupUser",
  async (formData: ISignupFormData, { rejectWithValue }) => {
    try {
      const response = await api.post("users/add", formData);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const signupUserSlice = createSlice({
  name: "signupUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signupUser.pending, (state: SignupUserState) => {
      state.isLoading = true;
    });
    builder.addCase(
      signupUser.fulfilled,
      (state: SignupUserState, action: PayloadAction<ISignupFormData>) => {
        state.isLoading = false;
        state.isAuth = true;
        state.userInfo = action.payload;
      }
    );
    builder.addCase(
      signupUser.rejected,
      (state: SignupUserState, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      }
    );
  },
});

export default signupUserSlice.reducer;
