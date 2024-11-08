import { endpoints } from "../endpoints";
import { apiSlice } from "./apiSlice";

interface MetricsProps {
  countriesReached: number;
  courseSales: number;
  totalRevenue: number;
}

interface ApiResponse {
  data: MetricsProps;
}

export const MetricsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMetrics: builder.query<MetricsProps, void>({
      query: () => ({
        url: endpoints.getMetrics,
        method: "GET",
        credentials: "include" as const,
      }),
      transformResponse: (response: ApiResponse) => response.data,
    }),
  }),
  overrideExisting: true,
});

export const { useGetMetricsQuery } = MetricsApi;
