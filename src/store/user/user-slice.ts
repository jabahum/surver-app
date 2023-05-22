import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../type";

interface IUserState {
  user: User | null;
}

const initialState: IUserState = {
  user: null,
};

const authSlice = createSlice({
  name: "user",
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
  initialState: initialState,
});

export default authSlice.reducer;

export const { logout, setUser } = authSlice.actions;
