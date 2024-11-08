"use client";
import { useGetReferralStatBySourceQuery } from "@/redux/features/referralsApi";

import { useSearchParams } from "next/navigation";

export default function ViewReferrals() {
  const searchParams = useSearchParams();
  const source = searchParams.get("source");

  const { data, isLoading, error } = useGetReferralStatBySourceQuery(
    source as string,
    { skip: !source }
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: Unable to fetch referral stats.</p>;
  console.log("By source", data);

  return (
    <div className="p-10">
      {data?.map((referral, i) => (
        <div
          className="bg-[#F9F9F9] md:p-9 space-y-9 text-[#101828] border-[0.5px] rounded-[4px] py-5 px-8 max-w-sm"
          key={i}
        >
          <h1 className="text-[#101828] text-xl">{referral.source}</h1>
          <p className="text-[#101828] font-bold mt-1.5">
            {referral.referrals}{" "}
            {referral.referrals === 1 ? "Referral" : "Referrals"}
          </p>
        </div>
      ))}
    </div>
  );
}
