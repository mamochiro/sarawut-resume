import {
  SiGo,
  SiElasticsearch,
  SiApachekafka,
  SiGitlab,
} from "react-icons/si";
import { FaHandshake } from "react-icons/fa";

export function Projects() {
  return (
    <section id="projects" className="bg-zinc-50 px-6 py-24 dark:bg-zinc-900">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold">Projects</h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {/* Project 1 */}
          <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950">
            <div className="flex items-center gap-3">
              <SiGo className="h-6 w-6" />
              <h3 className="font-semibold">Trading & Investment Open API</h3>
            </div>
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">
              Robowealth · Squad of 4–5 devs · Finvest, Odini, FinPlus
            </p>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
              Designed and built financial-grade REST and gRPC APIs processing
              200K+ transactions/day for trading and investment platforms
              serving mutual fund products across multiple client applications.
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                Architected Golang microservices with clean architecture — API
                contracts, data models, and service boundaries
              </li>
              <li>
                Idempotent transaction handling for recurring investment and
                portfolio operations
              </li>
              <li>
                Secure integration with external financial providers for mutual
                fund order execution
              </li>
            </ul>
          </div>

          {/* Wealth Plus — KBank Partnership */}
          <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950">
            <div className="flex items-center gap-3">
              <FaHandshake className="h-6 w-6" />
              <h3 className="font-semibold">Wealth Plus — KBank Partnership</h3>
            </div>
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">
              Robowealth &times; Kasikorn Bank · 4 squads (Mutual Fund, Open
              Account, BOF, etc.) · Mutual Fund Squad
            </p>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
              Co-developed the backend for Wealth Plus, a mutual fund investment
              platform integrated with Kasikorn Bank — one of Thailand&apos;s
              largest banks. Cross-team project involving 4 squads. Worked in
              the Mutual Fund squad responsible for the core trading flow.
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                Designed APIs to connect with KBank&apos;s third-party legacy
                systems — data mapping and contract negotiation across teams
              </li>
              <li>
                Conducted performance testing with k6 alongside the DevOps team
                to validate throughput under KBank-scale traffic
              </li>
              <li>
                Collaborated with the NFT (security) team on security testing
                and the SQM team on bug triage and resolution
              </li>
              <li>
                End-to-end mutual fund flow: fund browsing, order placement,
                DCA, portfolio management, and K-Point rewards integration
              </li>
            </ul>
          </div>

          {/* Project 2 */}
          <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950">
            <div className="flex items-center gap-3">
              <SiElasticsearch className="h-6 w-6" />
              <h3 className="font-semibold">Financial Data Search Platform</h3>
            </div>
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">
              Robowealth · Elasticsearch & Relational DB
            </p>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
              Designed and optimized Elasticsearch and relational database
              schemas for 3,000+ mutual funds with daily NAV history — ensuring
              query performance and scalability for financial analytics.
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                Complex nested mappings &amp; aggregations for fund data
                exploration and real-time analytics
              </li>
              <li>
                Reduced fund data ingestion time from 10 minutes to under 1
                minute through query and pipeline optimization
              </li>
              <li>Index lifecycle management &amp; data retention strategies</li>
            </ul>
          </div>

          {/* Project 3 */}
          <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950">
            <div className="flex items-center gap-3">
              <SiApachekafka className="h-6 w-6" />
              <h3 className="font-semibold">
                Scheduler & Worker Pool Engine
              </h3>
            </div>
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">
              Robowealth · Golang Concurrency
            </p>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
              Implemented concurrent schedulers and worker pools for
              time-sensitive financial processing — recurring investment
              execution, order recalculations, and batch operations.
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                Custom Golang worker pool with bounded concurrency and
                back-pressure control
              </li>
              <li>Kafka-based event-driven workflows for parallel processing</li>
              <li>
                Validated throughput under peak traffic using k6 load testing
              </li>
            </ul>
          </div>

          {/* Project 4 */}
          <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950">
            <div className="flex items-center gap-3">
              <SiGitlab className="h-6 w-6" />
              <h3 className="font-semibold">CI/CD & Production Reliability</h3>
            </div>
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">
              Robowealth · GitLab CI, ArgoCD, Kubernetes
            </p>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
              Designed CI/CD pipelines and cloud-native deployments for backend
              microservices with automated testing, deployment, and
              observability.
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                GitLab CI pipelines automating testing and deployment to
                Kubernetes via ArgoCD
              </li>
              <li>
                k6 load testing to validate system performance under peak
                traffic before production rollout
              </li>
              <li>
                GCP &amp; OpenShift infrastructure with Docker, Helm, Traefik,
                and APISIX
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
