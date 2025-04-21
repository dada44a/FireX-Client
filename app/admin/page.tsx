import Card from "@/components/ui/Card";
import Tabs from "@/components/ui/Tabs";
import { TrendingUp, TrendingDown } from "lucide-react";
const Admin = () => {


  return (
    <main className="min-h-screen py-8">
      <div className="cineverse-container">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card title="Total Movies">
            <p className="text-2xl font-bold">6</p>
            <div className="flex items-center text-gray-400">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500 " />
              <TrendingDown className="mr-1 h-3 w-3 text-red-400 hidden" />
              <p className="text-[12px]">+2 this week</p>
            </div>
          </Card>
          <Card title="Total Shows">
            <p className="text-2xl font-bold">6</p>
            <div className="flex items-center text-gray-400">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500 hidden" />
              <TrendingDown className="mr-1 h-3 w-3 text-red-400" />
              <p className="text-[12px]">+2 this week</p>
            </div>
          </Card>
          <Card title="Total Bookings">
            <p className="text-2xl font-bold">6</p>
            <div className="flex items-center text-gray-400">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500 " />
              <TrendingDown className="mr-1 h-3 w-3 text-red-400 hidden" />
              <p className="text-[12px]">+2 this week</p>
            </div>
          </Card>
          <Card title="Total Revenue">
            <p className="text-2xl font-bold">6</p>
            <div className="flex items-center text-gray-400">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500 hidden" />
              <TrendingDown className="mr-1 h-3 w-3 text-red-400" />
              <p className="text-[12px]">+2 this week</p>
            </div>
          </Card>
        </div>

        {/* name of each tab group should be unique */}
        <Tabs/>
      </div>
    </main>
  );
};

export default Admin;
