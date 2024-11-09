import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SERVER_URL,
    prepareHeaders: (headers, {}: any) => {
      headers.set("Accept", "application/json");
    },
  }),
  endpoints: (_builder) => ({}),
});

export const {} = apiSlice;
