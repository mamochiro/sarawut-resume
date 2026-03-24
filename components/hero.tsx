export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center bg-white px-6 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-4xl py-32">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
          Sarawut Nawawisitkul
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Senior Backend Engineer building trading &amp; investment platforms
          processing 200K+ transactions/day at Robowealth — powering Finvest,
          Odini, and FinPlus.
        </p>

        <p className="mt-4 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
          7+ years in FinTech &amp; Capital Markets. Golang-first. Based in
          Bangkok, Thailand.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="inline-flex items-center rounded-md border border-zinc-300 px-5 py-2 text-sm font-medium transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
