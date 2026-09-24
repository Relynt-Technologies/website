import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Eyebrow, SectionHead, CtaBand } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Relynt's three core services: background verification, cookie & consent compliance, and architecture diagram services.",
};

const cards = [
  {
    tag: "Hiring & HR",
    icon: "Shield",
    title: "Background Verification",
    text: "Employment, education, identity, address, criminal record and reference checks - delivered in 48&ndash;72 hours with a full audit trail.",
    pills: ["Employment History", "Education Check", "ID Verification", "Criminal Record"],
    cta: { label: "View BGV Plans", href: "/bgv" },
  },
  {
    tag: "Privacy & Legal",
    icon: "Cookie",
    title: "Cookie & Consent Compliance",
    text: "Cookie audits, consent management banners, and policy generation mapped to GDPR, CCPA and India's DPDP Act.",
    pills: ["Cookie Scanning", "Consent Banners", "Policy Generator", "Consent Logs"],
    cta: { label: "View Compliance Plans", href: "/cookie-compliance" },
  },
  {
    tag: "Engineering & Docs",
    icon: "Boxes",
    title: "Architecture Diagram Services",
    text: "Cloud, system, network and data-flow diagrams drafted by senior architects and kept current release over release.",
    pills: ["Cloud Architecture", "C4 Model", "Network Topology", "Data Flow"],
    cta: { label: "View Diagram Plans", href: "/architecture-diagrams" },
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>Services
          </div>
          <Eyebrow>Our Services</Eyebrow>
          <h1 style={{ maxWidth: 680 }}>
            Three specialized services, one accountable partner.
          </h1>
          <p className="lead" style={{ maxWidth: 640 }}>
            Every Relynt engagement is scoped, priced and delivered by specialists in that
            domain - not a generalist account manager. Pick one service or bundle all
            three.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {cards.map((c) => (
              <div className="card" key={c.title}>
                <div className="tag-row">
                  <span className="tag">{c.tag}</span>
                </div>
                <div className="icon-tile">
                  <Icon name={c.icon} />
                </div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <ul className="pill-list">
                  {c.pills.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <Link
                  href={c.cta.href}
                  className="btn btn-primary btn-block"
                  style={{ marginTop: 24 }}
                >
                  {c.cta.label} <Icon name="ArrowRight" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHead
            center
            eyebrow="Compare"
            title="Not sure where to start?"
            lead="Most clients begin with one service and expand once they see the turnaround and reporting quality."
          />
          <div className="grid grid-3">
            <div className="card">
              <h3>If you&apos;re hiring...</h3>
              <p>
                Start with{" "}
                <Link href="/bgv" style={{ color: "var(--secondary-600)", fontWeight: 700 }}>
                  Background Verification
                </Link>{" "}
                to screen candidates before offer rollout.
              </p>
            </div>
            <div className="card">
              <h3>If you&apos;re launching a product...</h3>
              <p>
                Start with{" "}
                <Link
                  href="/cookie-compliance"
                  style={{ color: "var(--secondary-600)", fontWeight: 700 }}
                >
                  Cookie Compliance
                </Link>{" "}
                to stay ahead of privacy regulators.
              </p>
            </div>
            <div className="card">
              <h3>If you&apos;re scaling engineering...</h3>
              <p>
                Start with{" "}
                <Link
                  href="/architecture-diagrams"
                  style={{ color: "var(--secondary-600)", fontWeight: 700 }}
                >
                  Architecture Diagrams
                </Link>{" "}
                to document systems before they get complex.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <CtaBand
            title="Still deciding? Talk to a specialist."
            text="We'll help you scope the right mix of services for your team's stage and budget."
            button={{ label: "Talk to Sales", href: "/contact" }}
          />
        </div>
      </section>
    </>
  );
}
