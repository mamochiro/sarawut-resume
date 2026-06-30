export function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <div className="hero-inner">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="hero-dot" />
            Available · Bangkok · GMT+7
          </div>

          <h1 className="hero-name">
            <span className="line1">Sarawut</span>
            <span className="line2">Nawawisitkul</span>
          </h1>

          <div className="hero-meta">
            <span className="hero-role">Senior Software Engineer</span>
            <span className="hero-sep">·</span>
            <span className="hero-location">Backend · Distributed Systems · FinTech</span>
          </div>

          <p className="hero-tagline">
            7 years building the FinTech backend infrastructure that processes real money at scale.
            I architect distributed systems, coordinate across teams, and own delivery from API contract to production.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="/resume" target="_blank" className="btn btn-ghost">Resume ↗</a>
          </div>
        </div>

        <div className="hero-widget-wrap">
          <div className="hw-card">
            <div className="hw-glow" />
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
              <div className="hw-avatar">SN</div>
              <div className="hw-avail">
                <span className="hw-dot" />
                Available
              </div>
            </div>
            <div>
              <div className="hw-name">Sarawut N.</div>
              <div className="hw-role">Software Engineer · FinTech</div>
              <div className="hw-loc">Bangkok, Thailand · GMT+7</div>
            </div>
            <div className="hw-divider" />
            <div className="hw-stats">
              <div className="hw-stat">
                <div className="hw-stat-num">7yr</div>
                <div className="hw-stat-lbl">Experience</div>
              </div>
              <div className="hw-stat">
                <div className="hw-stat-num">15+</div>
                <div className="hw-stat-lbl">Services</div>
              </div>
              <div className="hw-stat">
                <div className="hw-stat-num">3K+</div>
                <div className="hw-stat-lbl">Funds</div>
              </div>
            </div>
            <div className="hw-chips">
              <span className="hw-chip" style={{ color: "var(--purple)", background: "oklch(55% 0.22 296 / 0.10)", borderColor: "oklch(55% 0.22 296 / 0.24)" }}>Go</span>
              <span className="hw-chip" style={{ color: "var(--pink)",   background: "oklch(60% 0.20 352 / 0.10)", borderColor: "oklch(60% 0.20 352 / 0.24)" }}>Kafka</span>
              <span className="hw-chip" style={{ color: "var(--cobalt)", background: "oklch(53% 0.16 225 / 0.10)", borderColor: "oklch(53% 0.16 225 / 0.24)" }}>K8s</span>
              <span className="hw-chip" style={{ color: "var(--lime)",   background: "oklch(55% 0.16 155 / 0.10)", borderColor: "oklch(55% 0.16 155 / 0.24)" }}>gRPC</span>
              <span className="hw-chip" style={{ color: "var(--coral)",  background: "oklch(60% 0.14 50 / 0.10)",  borderColor: "oklch(60% 0.14 50 / 0.24)" }}>GCP</span>
            </div>
            <div className="hw-bar" />
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span className="hero-scroll-line" />
        SCROLL
      </div>
    </section>
  );
}
