export function About() {
  return (
    <section id="about" className="bg-zinc-50 px-6 py-24 dark:bg-zinc-900">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="mt-6 text-zinc-600 dark:text-zinc-400">
          Senior Backend Engineer with over 7 years of experience designing and
          building high-performance trading and investment platforms.
        </p>

        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Strong expertise in Golang microservices, financial Open APIs,
          Elasticsearch optimization, and event-driven architectures.
        </p>

        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Experienced in developing systems that handle large-scale data, high
          concurrency, and strict reliability requirements in production
          environments.
        </p>
      </div>
    </section>
  );
}
