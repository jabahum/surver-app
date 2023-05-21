import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoginPayload, SignUpPayload } from "../type";

const authSlice = createSlice({
  name: "auth",
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {},
    signUp(state, action: PayloadAction<SignUpPayload>) {},
    logout(state) {},
  },
  initialState: { isLoggedIn: false },
});

export const authActions = authSlice.actions;

export default authSlice;
