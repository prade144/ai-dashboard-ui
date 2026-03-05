import AnalyticsChart from "../../components/AnalyticsChart";
import Navbar from "../../components/navbar";
import { Users, DollarSign, Activity, TrendingUp } from "lucide-react";

export default function Dashboard() {
  const cards = [
    {
      title: "Total Users",
      value: "1,245",
      icon: Users,
      color: "text-blue-500",
    },
    {
      title: "Revenue",
      value: "$12,430",
      icon: DollarSign,
      color: "text-green-500",
    },
    {
      title: "Active Sessions",
      value: "324",
      icon: Activity,
      color: "text-purple-500",
    },
    {
      title: "Conversion Rate",
      value: "4.2%",
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
            className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl shadow p-6 hover:shadow-lg transition"
            >
                
              <div className="flex justify-between items-center">

                <div>
                  <p className="text-gray-500 text-sm">
                    {card.title}
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
         <AnalyticsChart />
    </div>
  );
}
