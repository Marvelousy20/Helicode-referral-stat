import Header from "@/components/Header";
import LearnerDetails from "@/components/LearnerDetails";
import ReferralCount from "@/components/ReferralCount";

export default function Home() {
  return (
    <div className="p-4 lg:p-20">
      <Header />
      <LearnerDetails />
      <ReferralCount />
    </div>
  );
}
