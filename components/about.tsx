export function About() {
  return (
    <section id="about" className="portfolio-section" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="section-inner">
        <div className="section-tag st-purple fade-in">
          <span className="tag-dot" style={{ background: "var(--purple)" }} />
          01 · About
        </div>

        <div className="about-grid">
          <div className="about-text fade-in fade-in-delay-1">
            <h2 className="about-heading">
              Backend architect,<br />
              <span className="grad">systems first.</span>
            </h2>
            <p>
              Most of my career has been in FinTech — the kind where a bug in production means real money moving to the wrong place.
              That environment shaped how I think about software: correctness first, then performance, then developer experience.
            </p>
            <p>
              At Robowealth I own backend architecture across multiple products and act as a technical bridge between teams —
              coordinating API contracts, unblocking engineers, and making architectural decisions that touch multiple services at once.
            </p>
            <p>
              Before writing a single line of code, I push for documented API contracts and explicit failure modes.
              That discipline — more than any tool or framework — is what makes systems maintainable at team scale.
            </p>
          </div>

          <div className="about-right">
            <div className="stats fade-in fade-in-delay-2">
              <div className="stat">
                <div className="stat-num c-purple">7+</div>
                <div className="stat-label">Years in backend engineering</div>
              </div>
              <div className="stat">
                <div className="stat-num c-pink">200K+</div>
                <div className="stat-label">Transactions per day processed</div>
              </div>
              <div className="stat">
                <div className="stat-num c-lime">15+</div>
                <div className="stat-label">Golang microservices architected</div>
              </div>
              <div className="stat">
                <div className="stat-num c-cobalt">3K+</div>
                <div className="stat-label">Mutual funds indexed in Elasticsearch</div>
              </div>
            </div>

            <div className="ab-widgets fade-in fade-in-delay-3">
              <div className="cb-widget">
                <div className="cb-label">
                  <span className="cb-pulse" />
                  CURRENTLY BUILDING
                </div>
                <div className="cb-title">Fund Ingestion<br />Pipeline v3</div>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  <span className="tag t-pink">Kafka</span>
                  <span className="tag t-purple">Golang</span>
                  <span className="tag t-lime">Kubernetes</span>
                </div>
                <div className="cb-status">
                  <div className="cb-status-dot" />
                  In progress
                </div>
              </div>

              <div className="rt-widget">
                <div className="rt-row" style={{ background: "oklch(55% 0.22 296 / 0.06)", borderColor: "oklch(55% 0.22 296 / 0.16)" }}>
                  <div className="rt-icon" style={{ background: "oklch(55% 0.22 296 / 0.10)", border: "1px solid oklch(55% 0.22 296 / 0.22)" }}>
                    <div className="rt-dot" style={{ background: "var(--purple)" }} />
                  </div>
                  <div>
                    <div className="rt-name">Backend Engineer</div>
                    <div className="rt-sub">Golang · gRPC · Kafka</div>
                  </div>
                </div>
                <div className="rt-row" style={{ background: "oklch(53% 0.16 225 / 0.06)", borderColor: "oklch(53% 0.16 225 / 0.16)" }}>
                  <div className="rt-icon" style={{ background: "oklch(53% 0.16 225 / 0.10)", border: "1px solid oklch(53% 0.16 225 / 0.22)" }}>
                    <div className="rt-dot" style={{ background: "var(--cobalt)" }} />
                  </div>
                  <div>
                    <div className="rt-name">Technical Coordinator</div>
                    <div className="rt-sub">API design · cross-team</div>
                  </div>
                </div>
                <div className="rt-row" style={{ background: "oklch(55% 0.16 155 / 0.06)", borderColor: "oklch(55% 0.16 155 / 0.18)" }}>
                  <div className="rt-icon" style={{ background: "oklch(55% 0.16 155 / 0.10)", border: "1px solid oklch(55% 0.16 155 / 0.22)" }}>
                    <div className="rt-dot" style={{ background: "var(--lime)" }} />
                  </div>
                  <div>
                    <div className="rt-name">System Architect</div>
                    <div className="rt-sub">15+ microservices</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
