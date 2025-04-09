import { endpoints } from "../endpoints";
import { apiSlice } from "./apiSlice";

interface DataProps {
  id?: string;
  firstName: string;
  lastName: string;
  ageRange: string;
  country: string;
  course: string;
  referralSource: string;
  phoneNumber: string;
  email: string;
  discordUserName: string;
  paymentStatus: string;
  paymentType: string;
  paymentMethod: string;
  paidOn: string;
}

interface PaginatedApiResponse {
  data: DataProps[];
  meta: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}

interface PaginationParams {
  page?: number;
  limit?: number;
}

export const ApplicationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getApplications: builder.query<PaginatedApiResponse, PaginationParams>({
      query: (params = { page: 1, limit: 15 }) => ({
        url: endpoints.getApplications,
        method: "GET",
        params: {
          page: params.page,
          limit: params.limit,
        },
        credentials: "include" as const,
      }),

      // transformResponse: (response: ApiResponse) => response.data,
    }),

    getAllApplications: builder.query<PaginatedApiResponse, void>({
      query: () => ({
        url: endpoints.getApplications,
        method: "GET",
        credentials: "include" as const,
      }),
      // transformResponse: (response: ApiResponse) => response.data,
    }),
  }),
  overrideExisting: true,
});

export const { useGetApplicationsQuery, useGetAllApplicationsQuery } =
  ApplicationApi;
