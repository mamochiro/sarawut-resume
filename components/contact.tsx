export function Contact() {
  return (
    <section id="contact" className="portfolio-section" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="section-inner">
        <div className="section-tag st-coral fade-in">
          <span className="tag-dot" style={{ background: "var(--coral)" }} />
          05 · Contact
        </div>

        <div className="contact-grid">
          <div className="fade-in fade-in-delay-1">
            <h2 className="contact-heading">Open to new<br />opportunities.</h2>
            <p className="contact-sub">
              Available for senior backend roles. Based in Bangkok, Thailand (GMT+7). Remote or hybrid.
              Best reached via email — I typically respond within 24 hours.
            </p>
            <div className="contact-availability">
              <span className="hero-dot" />
              Open to work · Senior Software Engineer
            </div>
          </div>

          <div className="contact-links fade-in fade-in-delay-2">
            <a href="mailto:sarawut.nawawisitkul@gmail.com" className="contact-link">
              <div>
                <div className="contact-link-label">Email</div>
                <div className="contact-link-value">sarawut.nawawisitkul@gmail.com</div>
              </div>
              <span className="contact-link-arrow">↗</span>
            </a>
            <a href="tel:+66918363922" className="contact-link">
              <div>
                <div className="contact-link-label">Phone</div>
                <div className="contact-link-value">+66 91-836-3922</div>
              </div>
              <span className="contact-link-arrow">↗</span>
            </a>
            <a href="https://github.com/mamochiro" target="_blank" rel="noreferrer" className="contact-link">
              <div>
                <div className="contact-link-label">GitHub</div>
                <div className="contact-link-value">github.com/mamochiro</div>
              </div>
              <span className="contact-link-arrow">↗</span>
            </a>
            <a href="https://linkedin.com/in/sarawut-nawawisitkul-4431aa181" target="_blank" rel="noreferrer" className="contact-link">
              <div>
                <div className="contact-link-label">LinkedIn</div>
                <div className="contact-link-value">linkedin.com/in/sarawut-nawawisitkul</div>
              </div>
              <span className="contact-link-arrow">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
