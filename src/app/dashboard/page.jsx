export default function DashboardHome() {
  const stats = [
    { title: "Total Products", value: 128 },
    { title: "Orders Today", value: 34 },
    { title: "Users", value: 54 },
    { title: "Revenue", value: "$12,340" },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.title} className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{stat.title}</p>
        </div>
      ))}
    </div>
  );
}
