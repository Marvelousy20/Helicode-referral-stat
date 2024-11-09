"use client";
import { useState } from "react";
import { useGetReferralsStatQuery } from "@/redux/features/referralsApi";
import { Check } from "lucide-react";

interface CardProps {
  name: string;
  noOfReferrals: number;
  link: string;
}

const ReferalCard = ({ name, noOfReferrals, link }: CardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  return (
    <div className="bg-[#F9F9F9] md:p-9 space-y-9 text-[#101828] border-[0.5px] rounded-[4px] py-5 px-8">
      <h1 className="text-[#101828]">{name}</h1>
      <p className="text-[#101828] font-bold mt-1.5">
        {noOfReferrals} {noOfReferrals === 1 ? "Referral" : "Referrals"}
      </p>
      <button
        className="bg-[#8D58FF] text-white w-full py-3 rounded-[6px] mt-6"
        title="Copy referral link"
        onClick={handleCopy}
      >
        {copied ? (
          <div className="flex justify-center items-center gap-2">
            Copied
            <Check className="w-4 h-4" />
          </div>
        ) : (
          <div className="flex justify-center">Copy referral code</div>
        )}
      </button>
    </div>
  );
};

export default function ReferralCount() {
  const { data, isLoading, error } = useGetReferralsStatQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: Unable to fetch referral stats.</p>;
  console.log("By source", data);

  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
        {data?.map((referral, i) => (
          <ReferalCard
            key={i}
            name={referral.source}
            noOfReferrals={referral.referrals}
            link={`http://localhost:3000/view-referrals?source=${referral.source}`}
          />
        ))}
      </div>
    </div>
  );
}
