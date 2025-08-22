export default function DashboardHome() {
  const stats = [
    { title: "Total Products", value: 128, color: "primary" },
    { title: "Orders Today", value: 34, color: "secondary" },
    { title: "Users", value: 54, color: "accent" },
    { title: "Revenue", value: "$12,340", color: "success" },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 py-20 px-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className={`bg-base-100 dark:bg-base-300 shadow-md rounded-xl p-6 flex flex-col items-center border-t-4 border-${stat.color}`}
        >
          <h2 className={`text-3xl font-bold text-${stat.color}`}>{stat.value}</h2>
          <p className="mt-2 text-base-content/80">{stat.title}</p>
        </div>
      ))}
    </div>
  );
}
