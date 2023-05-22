import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Answer } from "../../store/type";

const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT as string;

export const answerApi = createApi({
  reducerPath: "answerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}answer/`,
  }),
  endpoints: (builder) => ({
    getAnswers: builder.query<Answer[], void>({
      query() {
        return {
          url: "/",
          method: "GET",
          credentials: "include",
        };
      },
    }),
    getAnswer: builder.query<Answer, { surveyId: string }>({
      query({ surveyId }) {
        return {
          url: `/${surveyId}`,
          method: "GET",
          credentials: "include",
        };
      },
    }),
    addAnswer: builder.mutation<Answer, Answer>({
      query(data) {
        return {
          url: "/",
          method: "POST",
          body: data,
          credentials: "include",
        };
      },
    }),
    updateAnswer: builder.mutation<Answer, { id: string; answer: Answer }>({
      query({ id, answer }) {
        return {
          url: `/${id}`,
          method: "PUT",
          body: answer,
          credentials: "include",
        };
      },
    }),
  }),
});

export const {
  useGetAnswersQuery,
  useGetAnswerQuery,
  useAddAnswerMutation,
  useUpdateAnswerMutation,
} = answerApi;
