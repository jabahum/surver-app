import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../../store/type";
import { setUser } from "../../store/user/user-slice";

const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT as string;

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}auth/`,
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getMe: builder.query<User, null>({
      query() {
        return {
          url: "me",
          credentials: "include",
        };
      },
      transformResponse: (result: { data: { user: User } }) => result.data.user,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {}
      },
    }),
  }),
});
