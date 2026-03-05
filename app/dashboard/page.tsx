import AnalyticsChart from "../../components/AnalyticsChart";
import Navbar from "../../components/navbar";
import RevenueChart from "../../components/RevenueChart";
import RecentActivity from "../../components/RecentActivity";
import { Users, DollarSign, Activity, TrendingUp } from "lucide-react";

export default function Dashboard() {
const cards = [
  {
    title: "Total Users",
    value: "1,245",
    change: "+12%",
    icon: Users,
    color: "text-blue-500",
  },
  {
    title: "Revenue",
    value: "$12,430",
    change: "+8%",
    icon: DollarSign,
    color: "text-green-500",
  },
  {
    title: "Active Sessions",
    value: "324",
    change: "-3%",
    icon: Activity,
    color: "text-purple-500",
  },
  {
    title: "Conversion Rate",
    value: "4.2%",
    change: "+1.2%",
    icon: TrendingUp,
    color: "text-orange-500",
  },
];

  return (
    <div className="space-y-6">
      <Navbar />

      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
            key={card.title}
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl shadow p-6 hover:shadow-lg transition"
            >
                
              <div className="flex justify-between items-center">

                <div>
                  <p className="text-sm mt-2 text-green-500">
                    {card.change} this week
                  </p>

                  <h2 className="text-3xl font-bold mt-1">
                    {card.value}
                  </h2>
                </div>

                <Icon className={`${card.color}`} size={28} />

              </div>
            </div>
          );
        })}

      </div>
      <div className="grid gap-6 lg:grid-cols-2 mt-6">

        <RevenueChart />

        <RecentActivity />

     </div>
         <AnalyticsChart />
    </div>
  );
}
