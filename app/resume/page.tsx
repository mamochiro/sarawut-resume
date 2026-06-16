import type { Metadata } from "next";
import { PrintButton } from "@/components/print-button";

export const metadata: Metadata = {
  title: "Resume",
  description: "Sarawut Nawawisitkul — Software Engineer Resume",
};

export default function ResumePage() {
  return (
    <div className="resume-outer" style={{ background: "#f5f5f3", display: "flex", justifyContent: "center", padding: "48px 20px 64px", minHeight: "100vh" }}>
      <article className="resume-page" style={{ background: "#fff", width: "760px", maxWidth: "100%", padding: "52px 60px", boxShadow: "0 2px 24px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)" }}>

        {/* Header */}
        <header>
          <h1 className="hd-name">Sarawut Nawawisitkul</h1>
          <p className="hd-title">Software Engineer · Bangkok, Thailand</p>
          <div className="hd-contact">
            <a href="mailto:sarawut.nawawisitkul@gmail.com">sarawut.nawawisitkul@gmail.com</a>
            <span>+66 91-836-3922</span>
            <a href="https://github.com/mamochiro" target="_blank" rel="noreferrer">github.com/mamochiro</a>
            <a href="https://linkedin.com/in/sarawut-nawawisitkul-4431aa181" target="_blank" rel="noreferrer">linkedin.com/in/sarawut-nawawisitkul</a>
            <a href="https://sarawut-resume.vercel.app" target="_blank" rel="noreferrer">sarawut-resume.vercel.app</a>
          </div>
        </header>

        <hr className="r-rule" />

        {/* Summary */}
        <section className="summary">
          <p className="sec-label">Summary</p>
          <p>
            Software Engineer with 7+ years building trading and investment platforms in FinTech. Core contributor at Robowealth
            powering Finvest, Odini, FinPlus, and Wealth Plus (Kasikorn Bank partnership) — systems processing{" "}
            <strong>200K+ transactions/day</strong>. Specialized in Golang microservices with clean architecture, Elasticsearch
            optimization, Kafka-driven event workflows, and API design for third-party financial integrations.
          </p>
        </section>

        <hr className="r-rule" />

        {/* Experience */}
        <section>
          <p className="sec-label">Experience</p>
          <div className="roles">

            <div>
              <div className="role-head">
                <span className="role-title">Software Engineer</span>
                <span className="role-date">Mar 2020 – Present</span>
              </div>
              <p className="role-meta">Robowealth Co., Ltd. · Bangkok</p>
              <ul className="bullets">
                <li>Designed and maintained Open APIs for <strong>Finvest, Odini, and FinPlus</strong> — mutual fund trading platforms processing <strong>200K+ transactions/day</strong></li>
                <li>Co-developed <strong>Wealth Plus</strong> with Kasikorn Bank — mapped API contracts to KBank&apos;s legacy systems and ran k6 performance validation for bank-scale peak traffic before go-live</li>
                <li>Architected 15+ Golang microservices with clean architecture: explicit API contracts, data models, and service boundaries</li>
                <li>Designed Elasticsearch and relational schemas for <strong>3,000+ mutual funds</strong> with daily NAV history — reduced fund data ingestion from <strong>10 min → under 1 min</strong></li>
                <li>Built Kafka-driven event workflows and concurrent worker pools with bounded concurrency and back-pressure for financial batch processing</li>
                <li>Implemented GitLab CI → ArgoCD → Kubernetes pipelines with k6 load testing; deployed via Helm, Traefik, and APISIX with zero-downtime releases</li>
              </ul>
            </div>

            <div>
              <div className="role-head">
                <span className="role-title">Software Developer</span>
                <span className="role-date">Jul 2018 – Feb 2020</span>
              </div>
              <p className="role-meta">Workmotion Creative · Bangkok</p>
              <ul className="bullets">
                <li>Built backend APIs supporting high-traffic campaign sites for major cinema clients, sustaining 100K+ concurrent users at launch events</li>
                <li>Guided frontend engineers on API integration patterns, accelerating cross-team delivery</li>
              </ul>
            </div>

            <div>
              <div className="role-head">
                <span className="role-title">R&amp;D Intern</span>
                <span className="role-date">Aug – Dec 2017</span>
              </div>
              <p className="role-meta">Spoon Laboratories Co., Ltd.</p>
              <ul className="bullets">
                <li>Analyzed access patterns from 10K+ daily users and developed internal web service APIs to improve cross-team data accessibility</li>
              </ul>
            </div>

          </div>
        </section>

        <hr className="r-rule" />

        {/* Skills */}
        <section>
          <p className="sec-label">Skills</p>
          <div className="r-skills">
            <span className="sk-cat">Languages</span>
            <span className="sk-val">Golang (primary, 5+ yrs), Scala, TypeScript, JavaScript, PHP</span>
            <span className="sk-cat">Backend &amp; API</span>
            <span className="sk-val">REST, gRPC, GraphQL, Apache Kafka, Microservices, Clean Architecture</span>
            <span className="sk-cat">Databases</span>
            <span className="sk-val">PostgreSQL, MySQL, Elasticsearch, MongoDB, Redis, InfluxDB, Oracle</span>
            <span className="sk-cat">DevOps</span>
            <span className="sk-val">Docker, Kubernetes, Helm, GCP, OpenShift, GitLab CI, Jenkins, ArgoCD</span>
            <span className="sk-cat">Observability</span>
            <span className="sk-val">Grafana, Prometheus, Jaeger, ELK Stack, k6 Load Testing</span>
            <span className="sk-cat">Gateway &amp; Infra</span>
            <span className="sk-val">Traefik, APISIX, Terraform</span>
          </div>
        </section>

        <hr className="r-rule" />

        {/* Education */}
        <section>
          <p className="sec-label">Education</p>
          <p className="edu-deg">B.Eng. Software Engineering</p>
          <p className="edu-school">Prince of Songkla University, College of Computing · 2014 – 2018</p>
        </section>

        <PrintButton />
      </article>
    </div>
  );
}
