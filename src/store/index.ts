import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth/auth-slice";
import questionsSlice from "./question/question-slice";
import answerSlice from "./answer/answer-slice";
import surveySlice from "./survey/survey-slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { authApi } from "../redux/auth/auth-api";
import { questionApi } from "../redux/question/question-api";
import { answerApi } from "../redux/answer/answer-api";
import { surveyApi } from "../redux/survey/survey-api";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authSlice.reducer,
    [questionApi.reducerPath]: questionsSlice.reducer,
    [answerApi.reducerPath]: answerSlice.reducer,
    [surveyApi.reducerPath]: surveySlice.reducer,
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      authApi.middleware,
      questionApi.middleware,
      answerApi.middleware,
      surveyApi.middleware,
    ]),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
