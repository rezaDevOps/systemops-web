import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import { CONTACT_MAILTO, EARLY_ACCESS_MAILTO } from "@/lib/site";

const cloudPilotPoints = [
  "Read-only AWS access",
  "Security & IAM findings",
  "Reliability checks",
  "FinOps insights",
  "Evidence-backed reports",
];

const upcoming = [
  {
    name: "NIS2 Compliance",
    tagline: "Practical NIS2 readiness for modern IT environments.",
    description:
      "A future SystemOps product for assessing cloud and infrastructure environments against relevant NIS2 security and governance requirements.",
  },
  {
    name: "EU AI Act Compliance",
    tagline: "Understand and manage your AI compliance obligations.",
    description:
      "A future SystemOps product designed to help companies classify AI use cases, identify compliance gaps and prepare required documentation.",
  },
];

const principles = [
  "Practical",
  "Evidence-driven",
  "Easy to understand",
  "Designed for real-world technical teams",
  "Focused on actionable results instead of generic checklists",
];

const audience = [
  "SaaS companies",
  "DevOps and Platform teams",
  "AWS and cloud consultants",
  "MSPs",
  "IT departments",
  "Small and medium-sized businesses",
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="hero__brand">SystemOps</p>
            <h1 className="hero__title">Cloud Security, Governance &amp; Compliance — made practical.</h1>
            <p className="lead">
              SystemOps builds practical SaaS products that help companies understand, secure and govern
              their cloud and AI environments.
            </p>
            <p className="hero__body">
              Our goal is simple: turn complex infrastructure and compliance requirements into clear,
              actionable results.
            </p>
            <div className="actions">
              <Link href="/cloudpilot" className="btn btn--primary">
                Explore CloudPilot
              </Link>
              <a href={CONTACT_MAILTO} className="btn btn--secondary">
                Contact us
              </a>
            </div>
          </div>

          <figure className="map" aria-label="SystemOps product portfolio">
            <div className="map__root">
              <LogoMark size={18} />
              <span>SystemOps</span>
            </div>
            <ul className="map__branches">
              <li className="map__branch map__branch--live">
                <Link href="/cloudpilot" className="map__node">
                  <span className="map__name">CloudPilot</span>
                  <span className="map__desc">AWS security, IAM, reliability and cost audits</span>
                  <span className="status status--live">Available by invitation</span>
                </Link>
              </li>
              {upcoming.map((product) => (
                <li key={product.name} className="map__branch map__branch--soon">
                  <div className="map__node">
                    <span className="map__name">{product.name}</span>
                    <span className="status status--soon">Coming soon</span>
                  </div>
                </li>
              ))}
            </ul>
          </figure>
        </div>
      </section>

      <section id="products" className="section" aria-labelledby="products-title">
        <div className="container">
          <h2 id="products-title" className="section__title">
            Products
          </h2>

          <article className="product-feature">
            <div className="product-feature__main">
              <div className="product-feature__head">
                <h3 className="product-feature__name">CloudPilot</h3>
                <span className="status status--live">Available by invitation</span>
              </div>
              <p className="product-feature__tagline">
                AWS security, IAM, reliability and cost audits — in minutes.
              </p>
              <p>
                CloudPilot connects read-only to AWS environments and identifies security, IAM, reliability
                and FinOps risks using deterministic, evidence-backed checks.
              </p>
              <Link href="/cloudpilot" className="btn btn--primary">
                Discover CloudPilot
              </Link>
            </div>
            <ul className="checklist" aria-label="CloudPilot key points">
              {cloudPilotPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>

          <div className="upcoming">
            {upcoming.map((product) => (
              <article key={product.name} className="upcoming__card">
                <div className="upcoming__head">
                  <h3 className="upcoming__name">{product.name}</h3>
                  <span className="status status--soon">Coming soon</span>
                </div>
                <p className="upcoming__tagline">{product.tagline}</p>
                <p className="upcoming__desc">{product.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--rule" aria-labelledby="why-title">
        <div className="container split">
          <div>
            <h2 id="why-title" className="section__title">
              Why SystemOps
            </h2>
            <p className="lead">
              Modern IT teams face growing complexity across cloud infrastructure, cybersecurity and
              regulation.
            </p>
          </div>
          <div>
            <p className="split__intro">SystemOps focuses on tools that are:</p>
            <ul className="rule-list">
              {principles.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--rule" aria-labelledby="audience-title">
        <div className="container">
          <h2 id="audience-title" className="section__title">
            Who we build for
          </h2>
          <ul className="audience">
            {audience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band" aria-labelledby="start-title">
        <div className="container band__inner">
          <div>
            <h2 id="start-title" className="band__title">
              Start with CloudPilot
            </h2>
            <p>
              CloudPilot is currently our first available product, and it is available by invitation.
            </p>
          </div>
          <div className="actions">
            <a href={EARLY_ACCESS_MAILTO} className="btn btn--light">
              Request early access
            </a>
            <Link href="/cloudpilot" className="btn btn--ghost-light">
              Discover CloudPilot
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
