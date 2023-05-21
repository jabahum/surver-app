import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Answer } from "../type";

const answerSlice = createSlice({
  name: "answer",
  initialState: {
    answersList: [],
    answer: {},
  },
  reducers: {
    addAnswers: (state, action: PayloadAction<Answer>) => {},
    getAnswers: (state, action) => {},
    getAnswer: (state, action) => {},
    updateAnswer: (state, action: PayloadAction<Answer>) => {},
    deleteAnswer: (state, action) => {},
  },
});

export const answerActions = answerSlice.actions;

export default answerSlice;
