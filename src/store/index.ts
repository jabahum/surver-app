import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth/auth-slice";
import questionsSlice from "./question/question-slice";
import answerSlice from "./answer/answer-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    question: questionsSlice.reducer,
    answer: answerSlice.reducer,
  },
});

export default store;
