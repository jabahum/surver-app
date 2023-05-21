import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Question } from "../../store/type";

const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT as string;

export const questionApi = createApi({
  reducerPath: "questionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}question/`,
  }),
  endpoints: (builder) => ({
    getQuestions: builder.query<Question[], void>({
      query() {
        return {
          url: "/",
          method: "GET",
        };
      },
    }),
    getQuestion: builder.query<Question, { questionId: string }>({
      query({ questionId }) {
        return {
          url: `/${questionId}`,
          method: "GET",
        };
      },
    }),
    addQuestion: builder.mutation<Question, FormData>({
      query(data) {
        return {
          url: "/",
          method: "POST",
          body: data,
        };
      },
    }),
    updateQuestion: builder.mutation<
      Question,
      { id: string; question: FormData }
    >({
      query({ id, question }) {
        return {
          url: `${id}`,
          method: "PUT",
          body: question,
        };
      },
    }),
  }),
});

export const {
  useGetQuestionsQuery,
  useGetQuestionQuery,
  useAddQuestionMutation,
  useUpdateQuestionMutation,
} = questionApi;
