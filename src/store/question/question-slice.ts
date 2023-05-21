import { createSlice } from "@reduxjs/toolkit";

const questionsSlice = createSlice({
  name: "questions",
  reducers: {},
  initialState: {},
});

export const questionsActions = questionsSlice.actions;

export default questionsSlice;
