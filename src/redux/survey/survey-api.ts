import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Survey, SurveyResponse } from "../../store/type";

const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT as string;

export const surveyApi = createApi({
  reducerPath: "surveyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}survey/`,
  }),
  endpoints: (builder) => ({
    getSurveys: builder.query<SurveyResponse, void>({
      query() {
        return {
          url: "/",
          method: "GET",
          credentials: "include",
        };
      },
    }),
    getSurvey: builder.query<Survey, { surveyId: string }>({
      query({ surveyId }) {
        return {
          url: `${surveyId}/`,
          method: "GET",
          credentials: "include",
        };
      },
    }),
    addSurvey: builder.mutation<Survey, { survey: FormData }>({
      query(survey) {
        return {
          url: "/",
          method: "POST",
          body: survey,
          credentials: "include",
        };
      },
    }),
    updateSurvey: builder.mutation<Survey, { id: string; survey: FormData }>({
      query({ id, survey }) {
        return {
          url: `${id}`,
          method: "PUT",
          body: survey,
          credentials: "include",
        };
      },
    }),

    deleteSurvey: builder.mutation<Survey, { surveyId: string }>({
      query({ surveyId }) {
        return {
          url: `${surveyId}/`,
          method: "DELETE",
          credentials: "include",
        };
      },
    }),
  }),
});

export const {
  useGetSurveysQuery,
  useGetSurveyQuery,
  useAddSurveyMutation,
  useUpdateSurveyMutation,
  useDeleteSurveyMutation,
} = surveyApi;
