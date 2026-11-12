import type { Metadata } from "next";
import Link from "next/link";
import { EARLY_ACCESS_MAILTO } from "@/lib/site";

export const metadata: Metadata = {
  title: "CloudPilot — AWS security, IAM, reliability and cost audits",
  description:
    "CloudPilot connects read-only to AWS environments and identifies security, IAM, reliability and FinOps risks using deterministic, evidence-backed checks. Currently invite-only.",
};

const facts = [
  { term: "Platform", value: "AWS" },
  { term: "Access", value: "Read-only" },
  { term: "Checks", value: "Deterministic" },
  { term: "Findings", value: "Evidence-backed" },
  { term: "Availability", value: "Invite-only" },
];

const coverage = [
  {
    title: "AWS Security",
    text: "Identifies security risks in the configuration of your AWS environment.",
  },
  {
    title: "IAM",
    text: "Surfaces identity and access management risks across your AWS account.",
  },
  {
    title: "Reliability",
    text: "Checks your AWS environment for reliability risks.",
  },
  {
    title: "FinOps",
    text: "Highlights cost-related risks and FinOps insights in your AWS setup.",
  },
];

const steps = [
  {
    title: "Connect with read-only access",
    text: "CloudPilot connects to your AWS environment read-only. It reads configuration and does not change your resources.",
  },
  {
    title: "Run deterministic checks",
    text: "Every check follows defined rules, so the same environment produces the same findings — no guesswork.",
  },
  {
    title: "Act on evidence-backed findings",
    text: "Each finding comes with the evidence it is based on, so your team can verify it and decide what to fix.",
  },
];

export default function CloudPilotPage() {
  return (
    <>
      <section className="hero hero--product">
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="hero__brand">
              <Link href="/">SystemOps</Link> product
            </p>
            <h1 className="hero__title hero__title--product">CloudPilot</h1>
            <p className="lead lead--strong">AWS security, IAM, reliability and cost audits — in minutes.</p>
            <p className="hero__body">
              CloudPilot connects read-only to AWS environments and identifies security, IAM, reliability and
              FinOps risks using deterministic, evidence-backed checks.
            </p>
            <p className="notice">
              <strong>CloudPilot is currently invite-only.</strong> Request early access to get an invitation.
            </p>
            <div className="actions">
              <a href={EARLY_ACCESS_MAILTO} className="btn btn--primary">
                Request early access
              </a>
              <a href="#pricing" className="btn btn--secondary">
                See pricing
              </a>
            </div>
          </div>

          <dl className="spec" aria-label="CloudPilot at a glance">
            {facts.map((fact) => (
              <div key={fact.term} className="spec__row">
                <dt>{fact.term}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section" aria-labelledby="coverage-title">
        <div className="container">
          <h2 id="coverage-title" className="section__title">
            What CloudPilot audits
          </h2>
          <ul className="coverage">
            {coverage.map((item) => (
              <li key={item.title} className="coverage__item">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--rule" aria-labelledby="how-title">
        <div className="container">
          <h2 id="how-title" className="section__title">
            How it works
          </h2>
          <ol className="steps">
            {steps.map((step, index) => (
              <li key={step.title} className="steps__item">
                <span className="steps__num" aria-hidden="true">
                  {index + 1}
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="pricing" className="section section--rule" aria-labelledby="pricing-title">
        <div className="container">
          <div className="section__head">
            <h2 id="pricing-title" className="section__title">
              Pricing
            </h2>
            <p className="section__intro">
              CloudPilot is currently invite-only. Request early access to get started.
            </p>
          </div>

          <div className="pricing">
            <div className="plan">
              <h3 className="plan__name">Starter</h3>
              <p className="plan__price">
                <span className="plan__amount">€79</span>
                <span className="plan__period">/month excl. VAT</span>
              </p>
              <a href={EARLY_ACCESS_MAILTO} className="btn btn--secondary">
                Request early access
              </a>
            </div>
            <div className="plan">
              <h3 className="plan__name">Pro</h3>
              <p className="plan__price">
                <span className="plan__amount">€149</span>
                <span className="plan__period">/month excl. VAT</span>
              </p>
              <a href={EARLY_ACCESS_MAILTO} className="btn btn--secondary">
                Request early access
              </a>
            </div>
            <div className="plan plan--offer">
              <h3 className="plan__name">Founding customer offer</h3>
              <p className="plan__price">
                <span className="plan__amount">€49</span>
                <span className="plan__period">/month excl. VAT</span>
              </p>
              <p className="plan__note">For the first 6 months.</p>
              <a href={EARLY_ACCESS_MAILTO} className="btn btn--primary">
                Request early access
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="band" aria-labelledby="access-title">
        <div className="container band__inner">
          <div>
            <h2 id="access-title" className="band__title">
              CloudPilot is currently invite-only.
            </h2>
            <p>Request early access by email and tell us a little about your AWS environment.</p>
          </div>
          <div className="actions">
            <a href={EARLY_ACCESS_MAILTO} className="btn btn--light">
              Request early access
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
