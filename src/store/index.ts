import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { authApi } from "../redux/auth/auth-api";
import { questionApi } from "../redux/question/question-api";
import { answerApi } from "../redux/answer/answer-api";
import { surveyApi } from "../redux/survey/survey-api";
import { userApi } from "../redux/user/user-api";
import questionReducer from "../store/question/question-slice";
import answerReducer from "../store/answer/answer-slice";
import surveyReducer from "../store/survey/survey-slice";
import userReducer from "../store/user/user-slice";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [questionApi.reducerPath]: questionApi.reducer,
    [answerApi.reducerPath]: answerApi.reducer,
    [surveyApi.reducerPath]: surveyApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    questionState: questionReducer,
    answerState: answerReducer,
    surveyState: surveyReducer,
    userState: userReducer,
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      authApi.middleware,
      questionApi.middleware,
      answerApi.middleware,
      surveyApi.middleware,
      userApi.middleware,
    ]),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
