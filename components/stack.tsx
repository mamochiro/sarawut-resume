export function Stack() {
  return (
    <section id="stack" className="portfolio-section" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="section-inner">
        <div className="section-tag st-cobalt fade-in">
          <span className="tag-dot" style={{ background: "var(--cobalt)" }} />
          03 · Stack
        </div>

        <div className="stack-cloud fade-in fade-in-delay-1">
          <span className="sc-pill sc-lg t-purple">Golang</span>
          <span className="sc-pill sc-lg t-pink">Kafka</span>
          <span className="sc-pill sc-md t-cobalt">Elasticsearch</span>
          <span className="sc-pill sc-md t-lime">Kubernetes</span>
          <span className="sc-pill sc-md" style={{ color: "rgba(255,255,255,0.65)", background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.12)" }}>gRPC</span>
          <span className="sc-pill sc-sm t-coral">Traefik</span>
          <span className="sc-pill sc-sm t-gold">Grafana</span>
          <span className="sc-pill sc-sm" style={{ color: "rgba(255,255,255,0.5)", background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.1)" }}>PostgreSQL</span>
          <span className="sc-pill sc-sm" style={{ color: "rgba(255,255,255,0.5)", background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.1)" }}>Redis</span>
          <span className="sc-pill sc-xs" style={{ color: "rgba(255,255,255,0.38)", background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}>ArgoCD</span>
          <span className="sc-pill sc-xs" style={{ color: "rgba(255,255,255,0.38)", background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}>Helm</span>
          <span className="sc-pill sc-xs" style={{ color: "rgba(255,255,255,0.38)", background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}>GCP</span>
          <span className="sc-pill sc-xs" style={{ color: "rgba(255,255,255,0.38)", background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}>Docker</span>
        </div>

        <div className="stack-list fade-in fade-in-delay-2">
          <div className="stack-row">
            <div className="stack-cat">Languages</div>
            <div className="stack-items">
              <span className="tag t-purple">Golang</span>
              <span className="tag t-default">Scala</span>
              <span className="tag t-default">TypeScript</span>
              <span className="tag t-default">JavaScript</span>
              <span className="tag t-default">PHP</span>
            </div>
          </div>

          <div className="stack-row">
            <div className="stack-cat">APIs &amp; Messaging</div>
            <div className="stack-items">
              <span className="tag t-pink">Apache Kafka</span>
              <span className="tag t-default">REST</span>
              <span className="tag t-default">gRPC</span>
              <span className="tag t-default">GraphQL</span>
              <span className="tag t-default">Microservices</span>
              <span className="tag t-default">Clean Architecture</span>
            </div>
          </div>

          <div className="stack-row">
            <div className="stack-cat">Databases</div>
            <div className="stack-items">
              <span className="tag t-cobalt">PostgreSQL</span>
              <span className="tag t-cobalt">Elasticsearch</span>
              <span className="tag t-default">MySQL</span>
              <span className="tag t-default">MongoDB</span>
              <span className="tag t-default">Redis</span>
              <span className="tag t-default">InfluxDB</span>
              <span className="tag t-default">Oracle</span>
            </div>
          </div>

          <div className="stack-row">
            <div className="stack-cat">DevOps</div>
            <div className="stack-items">
              <span className="tag t-lime">Kubernetes</span>
              <span className="tag t-default">Docker</span>
              <span className="tag t-default">Helm</span>
              <span className="tag t-default">GCP</span>
              <span className="tag t-default">OpenShift</span>
              <span className="tag t-default">GitLab CI</span>
              <span className="tag t-default">ArgoCD</span>
              <span className="tag t-default">Jenkins</span>
              <span className="tag t-default">Terraform</span>
            </div>
          </div>

          <div className="stack-row">
            <div className="stack-cat">Observability</div>
            <div className="stack-items">
              <span className="tag t-gold">Grafana</span>
              <span className="tag t-default">Prometheus</span>
              <span className="tag t-default">Jaeger</span>
              <span className="tag t-default">ELK Stack</span>
              <span className="tag t-default">k6</span>
            </div>
          </div>

          <div className="stack-row">
            <div className="stack-cat">API Gateway</div>
            <div className="stack-items">
              <span className="tag t-coral">Traefik</span>
              <span className="tag t-default">APISIX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
