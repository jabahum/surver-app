import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Question } from "../type";

const questionsSlice = createSlice({
  name: "questions",
  reducers: {
    addQuestions: (state, action: PayloadAction<Question>) => {},
    getQuestions: (state, action) => {},
    getQuestion: (state, action) => {},
    updateQuestion: (state, action: PayloadAction<Question>) => {},
    deleteQuestion: (state, action) => {},
  },
  initialState: {
    questionsList: [],
    question: {},
  },
});

export const questionsActions = questionsSlice.actions;

export default questionsSlice;
