export function Projects() {
  return (
    <section id="projects" className="portfolio-section" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="section-inner">
        <div className="section-tag st-lime fade-in">
          <span className="tag-dot" style={{ background: "oklch(55% 0.22 135)" }} />
          04 · Projects
        </div>

        <div className="projects-grid">

          {/* Featured */}
          <div className="project-card featured pc-purple fade-in">
            <div className="project-main">
              <div className="project-num">01 · FEATURED</div>
              <div className="project-title">Trading &amp; Investment Platform</div>
              <div className="project-company" style={{ color: "var(--purple)" }}>Robowealth · Finvest, Odini, FinPlus, Wealth Plus</div>
              <p className="project-desc">
                Designed and owned the backend for Robowealth&apos;s mutual fund products — financial-grade REST and gRPC APIs with
                idempotent transaction handling for recurring investments and portfolio operations. The Wealth Plus × Kasikorn Bank
                integration was the highest-stakes project: mapping API contracts to KBank&apos;s legacy systems, and k6 load testing
                to validate performance under bank-scale peak traffic before go-live.
              </p>
              <div className="project-tags">
                <span className="tag t-purple">Golang</span>
                <span className="tag t-default">gRPC</span>
                <span className="tag t-default">PostgreSQL</span>
                <span className="tag t-pink">Kafka</span>
                <span className="tag t-default">k6</span>
                <span className="tag t-lime">Kubernetes</span>
              </div>
            </div>
            <div className="project-aside">
              <div className="highlight">200K+ txns / day</div>
              <div className="highlight">KBank integration</div>
              <div className="highlight">k6 load validated</div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card pc-cobalt fade-in fade-in-delay-1">
            <div className="project-num">02</div>
            <div className="project-title">Fund Search &amp; Data Ingestion</div>
            <div className="project-company" style={{ color: "var(--cobalt)" }}>Robowealth · Financial Search Infrastructure</div>
            <p className="project-desc">
              Designed Elasticsearch indices and relational schemas for 3,000+ mutual funds with daily NAV history.
              Rewrote the fund data ingestion pipeline, cutting processing time from 10 minutes to under 1 minute —
              enabling same-day NAV updates across all trading platforms.
            </p>
            <div className="project-tags">
              <span className="tag t-cobalt">Elasticsearch</span>
              <span className="tag t-default">PostgreSQL</span>
              <span className="tag t-purple">Golang</span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card pc-lime fade-in fade-in-delay-2">
            <div className="project-num">03</div>
            <div className="project-title">Financial Batch Processing Engine</div>
            <div className="project-company" style={{ color: "oklch(52% 0.22 135)" }}>Robowealth · Distributed Systems</div>
            <p className="project-desc">
              Built concurrent Golang worker pools with bounded concurrency and back-pressure for time-sensitive financial jobs —
              DCA orders, portfolio rebalancing, and statement generation. Kafka-driven workflows with idempotent handlers ensure
              at-least-once delivery without double-processing transactions.
            </p>
            <div className="project-tags">
              <span className="tag t-purple">Golang</span>
              <span className="tag t-pink">Kafka</span>
              <span className="tag t-default">Concurrency</span>
              <span className="tag t-default">Idempotency</span>
            </div>
          </div>

          {/* Project 4 */}
          <div className="project-card pc-coral fade-in fade-in-delay-3">
            <div className="project-num">04</div>
            <div className="project-title">CI/CD &amp; Delivery Platform</div>
            <div className="project-company" style={{ color: "var(--coral)" }}>Robowealth · Platform Engineering</div>
            <p className="project-desc">
              Established GitLab CI → ArgoCD → Kubernetes delivery pipelines with k6 load testing as a mandatory quality gate
              before production. GCP and OpenShift infrastructure managed via Helm — with Traefik and APISIX handling routing,
              rate-limiting, and auth. Zero-downtime rolling releases on every sprint.
            </p>
            <div className="project-tags">
              <span className="tag t-lime">Kubernetes</span>
              <span className="tag t-default">GitLab CI</span>
              <span className="tag t-default">ArgoCD</span>
              <span className="tag t-coral">Traefik</span>
              <span className="tag t-default">APISIX</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
