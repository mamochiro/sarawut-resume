export function About() {
  return (
    <section id="about" className="bg-zinc-50 px-6 py-24 dark:bg-zinc-900">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-semibold">About Me</h2>

        <p className="mt-6 text-zinc-600 dark:text-zinc-400">
          Most of my career has been in FinTech — the kind where a bug in
          production means real money moving to the wrong place. That
          environment shaped how I think about software: correctness first,
          then performance, then developer experience.
        </p>

        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          At{" "}
          <span className="font-medium text-zinc-900 dark:text-zinc-100">
            Robowealth
          </span>
          , I&apos;ve been the person teams come to when the API contract
          doesn&apos;t make sense, the Elasticsearch query is too slow, or
          nobody can figure out why the fund ingestion pipeline stalls at
          scale. I like those problems — the ones that sit between &ldquo;it
          works on my machine&rdquo; and &ldquo;it works under KBank-scale
          traffic at 9 AM on a trading day.&rdquo;
        </p>

        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          I prioritize maintainable architecture — well-defined service
          boundaries, explicit API contracts, and CI/CD pipelines with clear
          failure diagnostics. I focus on getting the design right upfront
          through technical discussions and documentation before writing code.
        </p>

        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-zinc-500 dark:text-zinc-400">
          <span>
            <span className="font-medium text-zinc-900 dark:text-zinc-100">
              7+ years
            </span>{" "}
            in backend engineering
          </span>
          <span>
            <span className="font-medium text-zinc-900 dark:text-zinc-100">
              B.S. Software Engineering
            </span>{" "}
            — Prince of Songkla University
          </span>
        </div>
      </div>
    </section>
  );
}
