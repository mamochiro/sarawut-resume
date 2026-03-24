const stats = [
  { label: "Years in FinTech", value: "7+" },
  { label: "Transactions / Day", value: "200K+" },
  { label: "Mutual Funds Indexed", value: "3,000+" },
  { label: "Products Shipped", value: "3" },
  { label: "Engineering Org", value: "30 people" },
];

export function Highlights() {
  return (
    <section className="border-y border-zinc-200 bg-white px-6 py-10 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
              {stat.value}
            </p>
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
