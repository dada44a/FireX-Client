import QRCard from "@/components/Rewards/QRCard";

import RewardsCard from "@/components/Rewards/RewardsCard";

export default function UserRewards() {
  return (
    <div>
      <h1 className="page-title text-4xl mb-6 md:mb-8 font-bold">
        Your Rewards
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RewardsCard />
        </div>
        <div className="lg:col-span-1">
          <QRCard />
        </div>
      </div>
    </div>
  );
}
