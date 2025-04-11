const rewardsList = [
  {
    title: "Free Ticket",
    points: 500,
    description: "Redeem for a free standard movie ticket",
  },
  {
    title: "Concession Discount",
    points: 300,
    description: "20% off at our concession stand",
  },
  {
    title: "Premium Upgrade",
    points: 800,
    description: "Upgrade to premium seating for any show",
  },
  {
    title: "Early Access",
    points: 1000,
    description: "24-hour early booking for blockbuster releases",
  },
];
const rewardListDisplay = rewardsList.map((reward, index) => (
  <div key={index} className="card card-border bg-base-300 p-0 ">
    <div className="card-body">
      <div className="flex justify-between">
      <div>
        <h2 className="card-title">{reward.title}</h2>
        <p>{reward.description}</p>
      </div>
      <div>
        <p className="text-2xl font-bold">{reward.points}</p>
        <p>Points</p>
      </div>
      </div>
    </div>
  </div>
));

export default function Rewards() {
  return (
    <>
      <div className="card card-border bg-base-200 mb-6">
        <div className="card-body flex flex-col gap-6">
          <div>
            <h2 className="card-title">FireX Rewards</h2>
            <p className="text-gray-500">Member Since: 2021/20/31</p>
          </div>
          <div id="progess" className="card-content flex flex-col gap-6">
            <div className="flex justify-around">
              <p className="text-gray-400">1550 Points</p>
              <p className="text-end text-gray-400">
                1550 more points until next tier
              </p>
            </div>
            <progress
              className="progress progress-warning"
              value="10"
              max="100"
            ></progress>

            <div className="grid grid-cols-2 lg:grid-cols-4">
              <div id="user-rewards-grid">
                <p className="text-center text-3xl font-bold">1550</p>
                <p className="text-center">Points to Free Tickets</p>
              </div>
              <div>
                <p className="text-center text-3xl font-bold">5</p>
                <p className="text-center">Free Tickets</p>
              </div>
              <div>
                <p className="text-center text-3xl font-bold">20%</p>
                <p className="text-center">Free Popcorn</p>
              </div>
              <div>
                <p className="text-center text-3xl font-bold">20%</p>
                <p className="text-center">Discount</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="card card-border bg-base-200 ">
          <div className="card-body">
            <h2 className="card-title">Available Rewards</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {rewardListDisplay}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
