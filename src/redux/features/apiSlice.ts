import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SERVER_URL,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    prepareHeaders: (headers, _: unknown) => {
      headers.set("Accept", "application/json");
    },
  }),
  endpoints: () => ({}),
});

export const {} = apiSlice;
