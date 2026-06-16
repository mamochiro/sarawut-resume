export function Highlights() {
  return (
    <section id="experience" className="portfolio-section" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="section-inner">
        <div className="section-tag st-pink fade-in">
          <span className="tag-dot" style={{ background: "var(--pink)" }} />
          02 · Experience
        </div>

        <div className="timeline">

          <div className="timeline-item fade-in">
            <div className="timeline-left">
              <div className="timeline-date">Mar 2020 – Present</div>
              <div className="timeline-company">Robowealth</div>
              <div className="timeline-location">Bangkok, Thailand</div>
              <div className="timeline-badge tb-current">
                <span className="hero-dot" style={{ width: "5px", height: "5px", flexShrink: 0 }} />
                Current · 5+ yrs
              </div>
            </div>
            <div className="timeline-right">
              <div className="timeline-role">Software Engineer</div>
              <p className="timeline-desc">
                Core contributor on Robowealth&apos;s trading and investment suite — Finvest, Odini, FinPlus, and the Kasikorn Bank
                partnership (Wealth Plus). Architected 15+ Golang microservices, owned API design for systems processing 200K+
                daily transactions, and established team-wide standards for API contracts and failure-mode documentation.
              </p>
              <div className="timeline-chips">
                <span className="tag t-purple">Golang</span>
                <span className="tag t-pink">Kafka</span>
                <span className="tag t-cobalt">Elasticsearch</span>
                <span className="tag t-lime">Kubernetes</span>
                <span className="tag t-default">gRPC</span>
                <span className="tag t-default">GCP</span>
                <span className="tag t-default">PostgreSQL</span>
              </div>
            </div>
          </div>

          <div className="timeline-item fade-in fade-in-delay-1">
            <div className="timeline-left">
              <div className="timeline-date">Jul 2018 – Feb 2020</div>
              <div className="timeline-company">Workmotion Creative</div>
              <div className="timeline-location">Bangkok, Thailand</div>
              <div className="timeline-badge tb-prev">1 yr 8 mos</div>
            </div>
            <div className="timeline-right">
              <div className="timeline-role">Software Developer</div>
              <p className="timeline-desc">
                Built backend APIs for high-traffic campaign platforms serving major cinema clients — sustaining 100K+ concurrent
                users at peak launch events. Mentored 4 frontend engineers on API integration patterns, accelerating cross-team delivery cycles.
              </p>
              <div className="timeline-chips">
                <span className="tag t-default">PHP</span>
                <span className="tag t-default">TypeScript</span>
                <span className="tag t-default">MySQL</span>
                <span className="tag t-default">REST</span>
              </div>
            </div>
          </div>

          <div className="timeline-item fade-in fade-in-delay-2">
            <div className="timeline-left">
              <div className="timeline-date">Aug – Dec 2017</div>
              <div className="timeline-company">Spoon Laboratories</div>
              <div className="timeline-location">Bangkok, Thailand</div>
              <div className="timeline-badge tb-prev">Internship</div>
            </div>
            <div className="timeline-right">
              <div className="timeline-role">R&amp;D Engineer Intern</div>
              <p className="timeline-desc">
                Analyzed access patterns from 10K+ daily users and developed internal web service APIs to improve cross-team
                data accessibility and reporting.
              </p>
              <div className="timeline-chips">
                <span className="tag t-default">R&amp;D</span>
                <span className="tag t-default">Internal APIs</span>
              </div>
            </div>
          </div>

          <div className="timeline-item fade-in fade-in-delay-3">
            <div className="timeline-left">
              <div className="timeline-date">2014 – 2018</div>
              <div className="timeline-company">Prince of Songkla University</div>
              <div className="timeline-location">Hat Yai, Thailand</div>
              <div className="timeline-badge tb-edu">Education</div>
            </div>
            <div className="timeline-right">
              <div className="timeline-role">B.Eng. Software Engineering</div>
              <p className="timeline-desc">
                College of Computing — Bachelor of Engineering in Software Engineering.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
