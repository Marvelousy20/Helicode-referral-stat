"use client";
import { useGetMetricsQuery } from "@/redux/features/metricsApi";

export default function Header() {
  const { data } = useGetMetricsQuery();

  return (
    <div>
      <h1 className="font-medium text-2xl mb-6">Welcome Fiyin</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#F9F9F9] p-4 md:p-9 space-y-9 text-[#101828] border-[0.5px] rounded-[4px]">
          <h1 className="text-lg font-medium">Total Revenue</h1>
          <h3 className="font-bold text-4xl">${data?.totalRevenue}</h3>
        </div>

        <div className="bg-[#F9F9F9] p-4 md:p-9 space-y-9 text-[#101828] border-[0.5px] rounded-[4px]">
          <h1 className="text-lg font-medium">Course Sales</h1>
          <h3 className="font-bold text-4xl">{data?.courseSales}</h3>
        </div>

        <div className="bg-[#F9F9F9] p-4 md:p-9 space-y-9 text-[#101828] border-[0.5px] rounded-[4px]">
          <h1 className="text-lg font-medium">Countries Reached</h1>
          <h3 className="font-bold text-4xl">{data?.countriesReached}</h3>
        </div>
      </div>
    </div>
  );
}
