import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Question } from "../type";

interface IQuestionState {
  question: Question | null;
}

const initialState: IQuestionState = {
  question: null,
};

const questionsSlice = createSlice({
  name: "questions",
  reducers: {
    questionState: (state, action: PayloadAction<Question>) => {},
  },
  initialState: initialState,
});

export default questionsSlice.reducer;

export const { questionState } = questionsSlice.actions;
