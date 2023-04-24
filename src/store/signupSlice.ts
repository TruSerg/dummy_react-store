import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { ISignupFormData } from "../services/formData";

import api from "../http";

interface SignupUserState {
  userInfo: ISignupFormData;
  isAuth: boolean;
  error: null;
  isLoading: boolean;
}

const initialState: SignupUserState = {
  userInfo: {} as ISignupFormData,
  isAuth: false,
  error: null,
  isLoading: false,
};

export const signupUser = createAsyncThunk(
  "signup/signupUser",
  async (formData: ISignupFormData, { rejectWithValue }) => {
    try {
      const res = await api.post("users/add", formData);

      const data = res.data;

      return data;
    } catch (e) {
      // rejectWithValue(e.message);
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
        state.error = null;
        state.isAuth = true;
        state.userInfo = action.payload;
      }
    );
    builder.addCase(signupUser.rejected, (state: SignupUserState) => {
      state.isLoading = false;
    });
  },
});

export default signupUserSlice.reducer;
