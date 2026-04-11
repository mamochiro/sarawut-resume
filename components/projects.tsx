import {
  SiGo,
  SiElasticsearch,
  SiApachekafka,
  SiGitlab,
} from "react-icons/si";

export function Projects() {
  return (
    <section id="projects" className="bg-zinc-50 px-6 py-24 dark:bg-zinc-900">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold">Projects</h2>

        {/* Flagship — Trading Platform */}
        <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 sm:p-8">
          <div className="flex items-center gap-3">
            <SiGo className="h-6 w-6" aria-hidden="true" />
            <h3 className="text-lg font-semibold">
              Trading &amp; Investment Platform
            </h3>
          </div>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">
            Robowealth · Finvest, Odini, FinPlus, and Wealth Plus (Kasikorn
            Bank partnership)
          </p>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            Core backend for Robowealth&apos;s mutual fund products —
            financial-grade REST and gRPC APIs processing 200K+
            transactions/day across four client applications. The Wealth Plus
            integration with Kasikorn Bank was the largest: 4 cross-functional
            squads, legacy system data mapping, and k6 load testing to validate
            KBank-scale traffic.
          </p>
          <div className="mt-5 grid gap-x-8 gap-y-3 text-sm text-zinc-600 dark:text-zinc-400 sm:grid-cols-2">
            <div>
              <p className="font-medium text-zinc-900 dark:text-zinc-100">
                What I built
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  Golang microservices with clean architecture — API contracts,
                  data models, service boundaries
                </li>
                <li>
                  Idempotent transaction handling for recurring investments and
                  portfolio operations
                </li>
                <li>
                  End-to-end mutual fund flow: browsing, orders, DCA, portfolio
                  management
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-zinc-900 dark:text-zinc-100">
                What made it hard
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  Integrating with KBank&apos;s legacy systems — contract
                  negotiation across 4 teams
                </li>
                <li>
                  Performance validation under bank-scale peak traffic with k6
                </li>
                <li>
                  Security testing coordination with the NFT and SQM teams
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Secondary projects */}
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          <div className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
            <SiElasticsearch
              className="h-5 w-5 text-zinc-400"
              aria-hidden="true"
            />
            <h3 className="mt-3 font-semibold">Fund Data Search</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Elasticsearch &amp; relational schemas for 3,000+ mutual funds
              with daily NAV history. Reduced ingestion from{" "}
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                10 min to under 1 min
              </span>
              .
            </p>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
            <SiApachekafka
              className="h-5 w-5 text-zinc-400"
              aria-hidden="true"
            />
            <h3 className="mt-3 font-semibold">Scheduler &amp; Worker Pool</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Concurrent Golang worker pools with bounded concurrency and
              back-pressure for time-sensitive financial batch processing.
              Kafka-driven event workflows.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
            <SiGitlab
              className="h-5 w-5 text-zinc-400"
              aria-hidden="true"
            />
            <h3 className="mt-3 font-semibold">CI/CD &amp; Reliability</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              GitLab CI → ArgoCD → Kubernetes pipelines with k6 load testing
              baked in. GCP &amp; OpenShift infrastructure with Helm, Traefik,
              and APISIX.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
