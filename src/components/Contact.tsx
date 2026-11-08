import { site } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact">
      <p className="eyebrow">05 — Contact</p>
      <h2 className="section-title">Say hello</h2>
      <p className="section-intro">Best by email.</p>

      <ul className="contact-lines">
        <li>
          <a href={`mailto:${site.email}`}>
            <span className="contact-label">Email</span>
            <span className="contact-value">{site.email}</span>
          </a>
        </li>
        <li>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">in/jai-rajagopalan</span>
          </a>
        </li>
        <li>
          <a href={site.github} target="_blank" rel="noopener noreferrer">
            <span className="contact-label">GitHub</span>
            <span className="contact-value">snowpup68</span>
          </a>
        </li>
      </ul>
    </section>
  );
}
