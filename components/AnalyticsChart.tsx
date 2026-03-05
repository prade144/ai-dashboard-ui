"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", users: 200 },
  { name: "Tue", users: 400 },
  { name: "Wed", users: 350 },
  { name: "Thu", users: 500 },
  { name: "Fri", users: 700 },
  { name: "Sat", users: 600 },
  { name: "Sun", users: 800 },
];

export default function AnalyticsChart() {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl shadow p-6">

      <h3 className="text-lg font-semibold mb-4">
        Weekly Users
      </h3>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={data}>

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="users"
              stroke="#3b82f6"
              strokeWidth={3}
            />

          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}