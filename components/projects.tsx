import { SiGo, SiElasticsearch, SiApachekafka, SiGitlab } from "react-icons/si";

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
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
              Designed and implemented financial-grade REST and gRPC APIs
              supporting trading, recurring investment, and portfolio operations
              with high concurrency.
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
              <li>High-throughput Golang microservices</li>
              <li>Idempotent transaction handling</li>
              <li>Secure integration with external financial providers</li>
            </ul>
          </div>

          {/* Project 2 */}
          <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950">
            <div className="flex items-center gap-3">
              <SiElasticsearch className="h-6 w-6" />
              <h3 className="font-semibold">
                Elasticsearch Financial Data Platform
              </h3>
            </div>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
              Built and optimized large-scale Elasticsearch clusters for
              financial analytics, fund data exploration, and real-time
              aggregation queries.
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
              <li>Complex nested mappings & aggregations</li>
              <li>Query optimization for latency-sensitive dashboards</li>
              <li>Index lifecycle & data retention strategies</li>
            </ul>
          </div>

          {/* Project 3 */}
          <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950">
            <div className="flex items-center gap-3">
              <SiApachekafka className="h-6 w-6" />
              <h3 className="font-semibold">
                High-Performance Scheduler & Worker Pool
              </h3>
            </div>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
              Implemented concurrent schedulers and worker pools for time-based
              financial processing and large-volume order recalculations.
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
              <li>Custom Golang worker pool abstractions</li>
              <li>Parallel processing & back-pressure control</li>
              <li>Kafka-based event-driven workflows</li>
            </ul>
          </div>

          {/* Project 4 */}
          <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950">
            <div className="flex items-center gap-3">
              <SiGitlab className="h-6 w-6" />
              <h3 className="font-semibold">CI/CD, Cloud & Observability</h3>
            </div>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
              Designed CI/CD pipelines and cloud-native deployments for backend
              services with strong observability and reliability guarantees.
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
              <li>GitLab CI, ArgoCD & Kubernetes</li>
              <li>Load testing with k6</li>
              <li>Production monitoring & alerting</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
