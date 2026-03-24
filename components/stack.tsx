import {
  SiGo,
  SiScala,
  SiJavascript,
  SiPhp,
  SiApachekafka,
  SiPostgresql,
  SiMysql,
  SiElasticsearch,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiGitlab,
  SiGrafana,
} from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa";

type TechItemProps = {
  name: string;
  Icon: React.ElementType;
  detail?: string;
};

function TechItem({ name, Icon, detail }: TechItemProps) {
  return (
    <div className="flex items-center gap-3 rounded-md border border-zinc-200 px-4 py-2 text-sm text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900">
      <Icon className="h-5 w-5 shrink-0" />
      <div>
        <span>{name}</span>
        {detail && (
          <span className="ml-1 text-xs text-zinc-400 dark:text-zinc-500">
            {detail}
          </span>
        )}
      </div>
    </div>
  );
}

export function Stack() {
  return (
    <section id="stack" className="bg-white px-6 py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-semibold">Tech Stack</h2>

        <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
          My default architecture: Golang with clean architecture for the
          service layer, PostgreSQL for transactional data, Redis for caching
          &amp; distributed locking, Kafka for event-driven communication,
          Elasticsearch for analytical queries — deployed on Kubernetes with
          ArgoCD and validated with k6 load testing.
        </p>

        <div className="mt-8 space-y-10">
          {/* Languages */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-900 dark:text-zinc-100">
              Languages
            </h3>
            <div className="flex flex-wrap gap-6">
              <TechItem
                name="Golang"
                Icon={SiGo}
                detail="· primary · 5+ yrs"
              />
              <TechItem name="Scala" Icon={SiScala} detail="· data pipelines" />
              <TechItem
                name="JavaScript"
                Icon={SiJavascript}
                detail="· tooling"
              />
              <TechItem name="PHP" Icon={SiPhp} detail="· legacy systems" />
            </div>
          </div>

          {/* Backend & Messaging */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-900 dark:text-zinc-100">
              Backend & API
            </h3>
            <div className="flex flex-wrap gap-6">
              <TechItem name="REST / gRPC / GraphQL" Icon={FaNetworkWired} />
              <TechItem name="Apache Kafka" Icon={SiApachekafka} />
              <TechItem
                name="Microservices"
                Icon={SiGrafana}
                detail="· Clean Architecture"
              />
            </div>
          </div>

          {/* Databases */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-900 dark:text-zinc-100">
              Databases & Search
            </h3>
            <div className="flex flex-wrap gap-6">
              <TechItem
                name="PostgreSQL"
                Icon={SiPostgresql}
                detail="· primary OLTP"
              />
              <TechItem name="MySQL" Icon={SiMysql} />
              <TechItem
                name="Elasticsearch"
                Icon={SiElasticsearch}
                detail="· financial analytics"
              />
              <TechItem name="MongoDB" Icon={SiMongodb} />
              <TechItem
                name="Redis"
                Icon={SiRedis}
                detail="· cache & locks"
              />
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-900 dark:text-zinc-100">
              Cloud & DevOps
            </h3>
            <div className="flex flex-wrap gap-6">
              <TechItem name="Docker / Helm" Icon={SiDocker} />
              <TechItem name="Kubernetes / OpenShift" Icon={SiKubernetes} />
              <TechItem name="Google Cloud Platform" Icon={SiGooglecloud} />
              <TechItem
                name="GitLab CI / Jenkins / ArgoCD"
                Icon={SiGitlab}
              />
              <TechItem
                name="k6 / Traefik / APISIX"
                Icon={SiGrafana}
                detail="· load testing & gateway"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
