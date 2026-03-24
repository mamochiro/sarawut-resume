export function About() {
  return (
    <section id="about" className="bg-zinc-50 px-6 py-24 dark:bg-zinc-900">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-semibold">About Me</h2>

        <p className="mt-6 text-zinc-600 dark:text-zinc-400">
          I have spent the last 7+ years building backend systems where
          reliability is not optional — trading platforms, investment APIs, and
          financial data infrastructure at{" "}
          <span className="font-medium text-zinc-900 dark:text-zinc-100">
            Robowealth
          </span>
          , serving mutual fund products across Finvest, Odini, and FinPlus.
        </p>

        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          My work focuses on the hard problems in FinTech: designing
          Golang-based microservices with clean architecture and well-defined
          service boundaries, optimizing Elasticsearch and relational database
          schemas for financial data at scale, and ensuring systems perform
          reliably under peak traffic through k6 load testing and CI/CD
          automation.
        </p>

        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          I operate best at the intersection of system design and hands-on
          implementation — from architecting API contracts and data models to
          building CI/CD pipelines and validating production readiness.
        </p>

        {/* Work History */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Experience
          </h3>

          <div className="mt-6 space-y-6">
            <div className="border-l-2 border-zinc-300 pl-4 dark:border-zinc-700">
              <p className="font-medium text-zinc-900 dark:text-zinc-100">
                Software Engineer
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Robowealth Co., Ltd. · Mar 2020 – Present
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">

                Part of a 30-person engineering org (squads of 4–5 devs + 2 QA).
                Designed and maintained Open APIs for trading and investment
                platforms processing 200K+ transactions/day across mutual fund
                products. Architected Golang microservices with clean
                architecture. Optimized fund data ingestion from 10 min to under
                1 min.
              </p>
            </div>

            <div className="border-l-2 border-zinc-300 pl-4 dark:border-zinc-700">
              <p className="font-medium text-zinc-900 dark:text-zinc-100">
                Software Developer
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Workmotion Creative · Jul 2018 – Feb 2020
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Developed backend APIs and services supporting high-traffic
                campaign websites for major cinema clients. Provided technical
                guidance and API integration support to team members.
              </p>
            </div>

            <div className="border-l-2 border-zinc-300 pl-4 dark:border-zinc-700">
              <p className="font-medium text-zinc-900 dark:text-zinc-100">
                Research and Development
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Spoon Laboratories Co., Ltd. · Aug 2017 – Dec 2017
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Analyzed user access data and generated system usage reports.
                Developed internal web service APIs to improve data
                accessibility.
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Education
          </h3>
          <div className="mt-4 border-l-2 border-zinc-300 pl-4 dark:border-zinc-700">
            <p className="font-medium text-zinc-900 dark:text-zinc-100">
              Prince Of Songkla University
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Bachelor of Software Engineering, College of Computing · 2014 –
              2018
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
