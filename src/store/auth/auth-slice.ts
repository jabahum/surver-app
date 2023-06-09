import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../type";

interface IUserState {
  user: User | null;
}

const initialState: IUserState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  reducers: {
    logout: () => initialState,
  },
  initialState: initialState,
});

export default authSlice.reducer;

export const { logout } = authSlice.actions;
