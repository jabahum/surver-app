import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Answer } from "../type";

interface IAnswerState {
  answer: Answer | null;
}

const initialState: IAnswerState = {
  answer: null,
};

const answerSlice = createSlice({
  name: "answer",
  initialState: initialState,
  reducers: {
    answerState: (state, action: PayloadAction<Answer>) => {},
  },
});

export default answerSlice.reducer;

export const { answerState } = answerSlice.actions;
