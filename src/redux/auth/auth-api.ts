import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGenericResponse } from "../../store/type";
import { RegisterInput } from "../../pages/auth/signup-page";
import { LoginInput } from "../../pages/auth/login-page";

const BASE_URL: string = process.env.REACT_APP_SERVER_ENDPOINT as string;

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}auth/`,
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<IGenericResponse, RegisterInput>({
      query(data) {
        return {
          url: "signup",
          method: "POST",
          body: data,
        };
      },
    }),

    loginUser: builder.mutation<IGenericResponse, LoginInput>({
      query(data) {
        return {
          url: "login",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
