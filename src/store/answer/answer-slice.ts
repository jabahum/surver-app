import { createSlice } from "@reduxjs/toolkit";

const answerSlice = createSlice({
  name: "answer",
  initialState: {},
  reducers: {},
});

export const answerActions = answerSlice.actions;

export default answerSlice;
