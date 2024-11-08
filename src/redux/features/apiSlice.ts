import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SERVER_URL,
    prepareHeaders: (headers, { getState }: any) => {
      headers.set("Accept", "application/json");
    },
  }),
  endpoints: (builder) => ({}),
});

export const {} = apiSlice;
