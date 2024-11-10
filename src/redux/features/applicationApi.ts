import { endpoints } from "../endpoints";
import { apiSlice } from "./apiSlice";

interface DataProps {
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

interface ApiResponse {
  data: DataProps[];
}

export const ApplicationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getApplications: builder.query<DataProps[], void>({
      query: () => ({
        url: endpoints.getApplications,
        method: "GET",
        credentials: "include" as const,
      }),
      transformResponse: (response: ApiResponse) => response.data,
    }),
  }),
  overrideExisting: true,
});

export const { useGetApplicationsQuery } = ApplicationApi;
