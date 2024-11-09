"use client";
import Table from "./Table";
import { useGetApplicationsQuery } from "@/redux/features/applicationApi";

export default function LearnerDetails() {
  const { data, isLoading, error } = useGetApplicationsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: Unable to fetch referral stats.</p>;
  console.log("By source", data);

  return (
    <div className="mt-10">
      <div className="flex justify-between text-[#101828] text-lg font-medium">
        <h4>Learner details</h4>

        <button className="underline">Download CSV </button>
      </div>

      <div>
        <Table data={data} />
      </div>
    </div>
  );
}
