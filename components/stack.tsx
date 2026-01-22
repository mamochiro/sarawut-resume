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
};

function TechItem({ name, Icon }: TechItemProps) {
  return (
    <div className="flex items-center gap-3 rounded-md border border-zinc-200 px-4 py-2 text-sm text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900">
      <Icon className="h-5 w-5" />
      <span>{name}</span>
    </div>
  );
}

export function Stack() {
  return (
    <section id="stack" className="bg-white px-6 py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-semibold">Tech Stack</h2>

        <div className="mt-8 space-y-10">
          {/* Languages */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-900 dark:text-zinc-100">
              Languages
            </h3>
            <div className="flex flex-wrap gap-6">
              <TechItem name="Golang" Icon={SiGo} />
              <TechItem name="Scala" Icon={SiScala} />
              <TechItem name="JavaScript" Icon={SiJavascript} />
              <TechItem name="PHP" Icon={SiPhp} />
            </div>
          </div>

          {/* Backend & Messaging */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-900 dark:text-zinc-100">
              Backend & Messaging
            </h3>
            <div className="flex flex-wrap gap-6">
              <TechItem name="REST / gRPC / GraphQL" Icon={FaNetworkWired} />
              <TechItem name="Apache Kafka" Icon={SiApachekafka} />
              <TechItem name="Microservices" Icon={SiGrafana} />
            </div>
          </div>

          {/* Databases */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-900 dark:text-zinc-100">
              Databases & Search
            </h3>
            <div className="flex flex-wrap gap-6">
              <TechItem name="PostgreSQL" Icon={SiPostgresql} />
              <TechItem name="MySQL" Icon={SiMysql} />
              <TechItem name="Elasticsearch" Icon={SiElasticsearch} />
              <TechItem name="MongoDB" Icon={SiMongodb} />
              <TechItem name="Redis" Icon={SiRedis} />
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-900 dark:text-zinc-100">
              Cloud & DevOps
            </h3>
            <div className="flex flex-wrap gap-6">
              <TechItem name="Docker" Icon={SiDocker} />
              <TechItem name="Kubernetes" Icon={SiKubernetes} />
              <TechItem name="Google Cloud Platform" Icon={SiGooglecloud} />
              <TechItem name="GitLab CI / ArgoCD" Icon={SiGitlab} />
              <TechItem name="k6 / Observability" Icon={SiGrafana} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
