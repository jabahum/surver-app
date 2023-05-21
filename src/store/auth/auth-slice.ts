import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    signUp(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  initialState: { isLoggedIn: false },
});

export const authActions = authSlice.actions;

export default authSlice;
