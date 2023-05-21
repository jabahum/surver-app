import { createSlice } from "@reduxjs/toolkit";

const questionsSlice = createSlice({
  name: "questions",
  reducers: {
    addQuestions: (state, action) => {},
    getQuestions: (state, action) => {},
    getQuestion: (state, action) => {},
    updateQuestion: (state, action) => {},
    deleteQuestion: (state, action) => {},
  },
  initialState: {
    questionsList: [],
    question: {},
  },
});

export const questionsActions = questionsSlice.actions;

export default questionsSlice;
