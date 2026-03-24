import type { Metadata } from "next";
import { PrintButton } from "@/components/print-button";

export const metadata: Metadata = {
  title: "Resume",
  description: "Sarawut Nawawisitkul — Senior Backend Engineer Resume",
};

export default function ResumePage() {
  return (
    <main className="resume-page mx-auto max-w-[210mm] bg-white px-12 py-10 text-zinc-900 print:px-0 print:py-0">
      {/* Header */}
      <header className="border-b border-zinc-300 pb-4">
        <h1 className="text-3xl font-bold tracking-tight">
          SARAWUT NAWAWISITKUL
        </h1>
        <p className="mt-1 text-base font-medium text-zinc-600">
          Senior Backend Engineer
        </p>
        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-zinc-600">
          <a href="mailto:sarawut.nawawisitkul@gmail.com">
            sarawut.nawawisitkul@gmail.com
          </a>
          <span>+66 91-836-3922</span>
          <a
            href="https://github.com/mamochiro"
            target="_blank"
            rel="noreferrer"
          >
            github.com/mamochiro
          </a>
          <a
            href="https://linkedin.com/in/sarawut-nawawisitkul-4431aa181"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/sarawut-nawawisitkul
          </a>
        </div>
      </header>

      {/* Summary */}
      <section className="mt-6">
        <h2 className="text-sm font-bold uppercase tracking-widest">
          Summary
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-zinc-700">
          Senior Backend Engineer with 7+ years building trading and investment
          platforms processing 200K+ transactions/day. Core contributor at
          Robowealth powering Finvest, Odini, FinPlus, and Wealth Plus (Kasikorn
          Bank partnership). Specialized in Golang microservices with clean
          architecture, Elasticsearch optimization (3,000+ mutual funds
          indexed), and API design for third-party financial integrations.
        </p>
      </section>

      {/* Work Experience */}
      <section className="mt-6">
        <h2 className="text-sm font-bold uppercase tracking-widest">
          Work Experience
        </h2>

        {/* Robowealth */}
        <div className="mt-4">
          <div className="flex items-baseline justify-between">
            <h3 className="text-sm font-bold">
              Software Engineer — Robowealth Co., Ltd.
            </h3>
            <span className="shrink-0 text-sm text-zinc-500">
              Mar 2020 – Present
            </span>
          </div>
          <p className="mt-1 text-xs italic text-zinc-500">
            30-person engineering org · Squads of 4–5 devs + 2 QA · Scrum
          </p>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-zinc-700">
            <li>
              Designed, developed, and maintained Open APIs processing{" "}
              <strong>200K+ transactions/day</strong> for trading and investment
              platforms serving mutual fund products (Finvest, Odini, FinPlus).
            </li>
            <li>
              Co-developed{" "}
              <strong>Wealth Plus with Kasikorn Bank (KBank)</strong> — a
              cross-team project with 4 squads (Mutual Fund, Open Account, BOF,
              etc.). Designed APIs to integrate with KBank&apos;s legacy systems,
              conducted performance testing with DevOps team (k6), security
              testing with NFT team, and bug resolution with SQM team.
            </li>
            <li>
              Architected Golang-based microservices with clean architecture
              including API contracts, data models, and service boundaries.
            </li>
            <li>
              Designed Elasticsearch and relational database schemas for{" "}
              <strong>3,000+ mutual funds</strong> with daily NAV history.
              Reduced fund data ingestion from{" "}
              <strong>10 minutes to under 1 minute</strong>.
            </li>
            <li>
              Implemented CI/CD pipelines (GitLab CI, ArgoCD) enabling
              sprint-based deployments to Kubernetes.
            </li>
            <li>
              Conducted k6 load testing to validate system performance under
              KBank-scale peak traffic before production rollout.
            </li>
          </ul>
        </div>

        {/* Workmotion Creative */}
        <div className="mt-5">
          <div className="flex items-baseline justify-between">
            <h3 className="text-sm font-bold">
              Software Developer — Workmotion Creative
            </h3>
            <span className="shrink-0 text-sm text-zinc-500">
              Jul 2018 – Feb 2020
            </span>
          </div>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-zinc-700">
            <li>
              Developed backend APIs and services supporting high-traffic
              campaign websites for major cinema clients.
            </li>
            <li>
              Provided technical guidance and API integration support to team
              members.
            </li>
          </ul>
        </div>

        {/* Spoon Laboratories */}
        <div className="mt-5">
          <div className="flex items-baseline justify-between">
            <h3 className="text-sm font-bold">
              Research and Development — Spoon Laboratories Co., Ltd.
            </h3>
            <span className="shrink-0 text-sm text-zinc-500">
              Aug 2017 – Dec 2017
            </span>
          </div>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-zinc-700">
            <li>
              Analyzed user access data and generated system usage reports.
            </li>
            <li>
              Developed internal web service APIs to improve data accessibility.
            </li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="mt-6">
        <h2 className="text-sm font-bold uppercase tracking-widest">
          Education
        </h2>
        <div className="mt-3 flex items-baseline justify-between">
          <div>
            <h3 className="text-sm font-bold">Prince Of Songkla University</h3>
            <p className="text-sm text-zinc-600">
              Bachelor of Software Engineering, College of Computing
            </p>
          </div>
          <span className="shrink-0 text-sm text-zinc-500">2014 – 2018</span>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="mt-6">
        <h2 className="text-sm font-bold uppercase tracking-widest">
          Technical Skills
        </h2>
        <div className="mt-3 space-y-2 text-sm text-zinc-700">
          <div>
            <span className="font-semibold">Programming Languages: </span>
            <strong>Golang</strong>, Scala, JavaScript, PHP
          </div>
          <div>
            <span className="font-semibold">Backend & API: </span>
            REST, gRPC, GraphQL · Microservices, Clean Architecture
          </div>
          <div>
            <span className="font-semibold">Databases & Storage: </span>
            PostgreSQL, MySQL, Elasticsearch, MongoDB, Redis, InfluxDB, Oracle
          </div>
          <div>
            <span className="font-semibold">DevOps & Infrastructure: </span>
            Docker, Kubernetes, Helm · GitLab CI/CD, Jenkins, ArgoCD · GCP,
            OpenShift · k6 Load Testing, Traefik, APISIX
          </div>
        </div>
      </section>

      {/* Print button — hidden in print */}
      <PrintButton />
    </main>
  );
}
