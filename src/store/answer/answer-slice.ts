import { createSlice } from "@reduxjs/toolkit";

const answerSlice = createSlice({
  name: "answer",
  initialState: {},
  reducers: {
    addAnswers: (state, action) => {},
    getAnswers: (state, action) => {},
    getAnswer: (state, action) => {},
    updateAnswer: (state, action) => {},
    deleteAnswer: (state, action) => {},
  },
});

export const answerActions = answerSlice.actions;

export default answerSlice;
