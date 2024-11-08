import { endpoints } from "../endpoints";
import { apiSlice } from "./apiSlice";

interface DataProps {
  referrals: number;
  source: string;
}

interface ApiResponse {
  data: DataProps[];
}

export const ReferralsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReferralsStat: builder.query<DataProps[], void>({
      query: () => ({
        url: endpoints.getReferralStats,
        method: "GET",
        credentials: "include" as const,
      }),
      transformResponse: (response: ApiResponse) => response.data,
    }),

    getReferralStatBySource: builder.query<DataProps[], string>({
      query: (source: string) => ({
        url: endpoints.getReferralStatsBySource(source),
        method: "GET",
        credentials: "include" as const,
      }),
      transformResponse: (response: ApiResponse) => response.data,
    }),
  }),

  overrideExisting: true,
});

export const { useGetReferralsStatQuery, useGetReferralStatBySourceQuery } =
  ReferralsApi;
