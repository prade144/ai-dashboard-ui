export default function RecentActivity() {
  const activities = [
    { user: "Alex", action: "Signed up", time: "2 minutes ago" },
    { user: "Sarah", action: "Upgraded plan", time: "10 minutes ago" },
    { user: "John", action: "Cancelled subscription", time: "1 hour ago" },
    { user: "Emma", action: "Started trial", time: "2 hours ago" },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
        Recent Activity
      </h3>

      <table className="w-full text-sm">
        <thead className="text-gray-500 dark:text-gray-400">
          <tr>
            <th className="text-left pb-2">User</th>
            <th className="text-left pb-2">Action</th>
            <th className="text-left pb-2">Time</th>
          </tr>
        </thead>

        <tbody className="text-gray-700 dark:text-gray-300">
          {activities.map((item, i) => (
            <tr key={i} className="border-t border-gray-200 dark:border-gray-700">
              <td className="py-2">{item.user}</td>
              <td>{item.action}</td>
              <td>{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}