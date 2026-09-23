import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Eyebrow, SectionHead, CtaBand, Steps, PriceCard } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Background Verification",
  description:
    "Employment, education, identity, address, criminal record and reference checks with 48-72 hour turnaround.",
};

const coverage = [
  { icon: "IdCard", title: "Employment History", text: "Verify past employers, tenure, designation and reason for leaving." },
  { icon: "Graduation", title: "Education Verification", text: "Confirm degrees, certifications and institutions directly with issuers." },
  { icon: "CreditCard", title: "Identity & Address", text: "Government ID cross-checks and physical or digital address confirmation." },
  { icon: "Scissors", title: "Criminal Record Check", text: "Court and database record checks across jurisdictions where legally permitted." },
  { icon: "Users", title: "Reference Checks", text: "Structured calls with former managers or peers, recorded and summarized." },
  { icon: "FileText", title: "Document Authentication", text: "Forensic-style checks on submitted certificates and government documents." },
  { icon: "Globe", title: "Global & Gig Checks", text: "Right-sized verification for white-collar, blue-collar and gig-economy roles." },
  { icon: "Shield", title: "Continuous Monitoring", text: "Optional ongoing record monitoring for active employees, refreshed periodically." },
] as const;

export default function BgvPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/services">Services</Link>
            <span className="sep">/</span>Background Verification
          </div>
          <div className="two-col">
            <div>
              <Eyebrow>Background Verification</Eyebrow>
              <h1>Hire with confidence, every time.</h1>
              <p className="lead">
                Comprehensive employment, education, identity and record checks &mdash;
                automated where it&apos;s safe to be, and reviewed by a specialist wherever it
                matters.
              </p>
              <div className="hero-actions">
                <Link href="/contact" className="btn btn-primary">
                  Start a Verification <Icon name="ArrowRight" />
                </Link>
                <a href="#bgv-pricing" className="btn btn-ghost">
                  See Pricing
                </a>
              </div>
            </div>
            <div className="card" style={{ boxShadow: "var(--shadow-lg)" }}>
              <div className="hero-card-row">
                <div>
                  <strong>Avg. Turnaround</strong>
                </div>
                <span className="status-pill info">
                  <Icon name="Clock" /> 48&ndash;72 hrs
                </span>
              </div>
              <div className="hero-card-row">
                <div>
                  <strong>Countries Covered</strong>
                </div>
                <span className="status-pill ok">40+</span>
              </div>
              <div className="hero-card-row">
                <div>
                  <strong>Checks Completed</strong>
                </div>
                <span className="status-pill ok">10,000+</span>
              </div>
              <div className="hero-card-row">
                <div>
                  <strong>Data Handling</strong>
                </div>
                <span className="status-pill info">
                  <Icon name="Lock" /> ISO 27001-aligned
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            center
            eyebrow="Coverage"
            title="Checks that cover every stage of the candidate lifecycle"
          />
          <div className="grid grid-4">
            {coverage.map((c) => (
              <div className="card" key={c.title}>
                <div className="icon-tile">
                  <Icon name={c.icon} />
                </div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHead center eyebrow="Process" title="How a verification runs" />
          <Steps
            steps={[
              { num: 1, title: "Submit candidate details", text: "Upload details via dashboard, spreadsheet, or ATS integration." },
              { num: 2, title: "Consent & initiation", text: "Candidate receives a consent request; checks begin the moment it's granted." },
              { num: 3, title: "Automated + manual checks", text: "Databases are queried automatically; discrepancies go to a human reviewer." },
              { num: 4, title: "Report delivered", text: "A clear pass/flag report lands in your dashboard within 48&ndash;72 hours." },
            ]}
          />
        </div>
      </section>

      <section className="section" id="bgv-pricing">
        <div className="container">
          <SectionHead
            center
            eyebrow="Pricing"
            title="Simple, per-check pricing"
            lead="Billed monthly based on volume. Custom checks and enterprise SLAs available on request."
          />
          <div className="grid grid-3">
            <PriceCard
              title="Basic"
              subtitle="For early-stage teams hiring occasionally."
              amount={
                <>
                  &#8377;499<span>/check</span>
                </>
              }
              features={[
                "Identity + address check",
                "1 employment verification",
                "72hr turnaround",
                "Email support",
              ]}
              cta={{ label: "Get Started", href: "/contact" }}
            />
            <PriceCard
              title="Standard"
              subtitle="For growing companies with regular hiring."
              amount={
                <>
                  &#8377;899<span>/check</span>
                </>
              }
              features={[
                "Everything in Basic",
                "Education + criminal record check",
                "2 reference checks",
                "48hr turnaround",
                "Dashboard + ATS integration",
              ]}
              cta={{ label: "Get Started", href: "/contact", variant: "btn-primary" }}
              featured
              tag="Most Popular"
            />
            <PriceCard
              title="Enterprise"
              subtitle="For high-volume hiring and custom SLAs."
              amount="Custom"
              features={[
                "Everything in Standard",
                "Continuous monitoring",
                "Dedicated account manager",
                "Custom SLA & volume pricing",
              ]}
              cta={{ label: "Talk to Sales", href: "/contact" }}
            />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <CtaBand
            title="Start your first verification today"
            text="Most teams complete onboarding and submit their first candidate within an hour."
            button={{ label: "Get Started", href: "/contact" }}
          />
        </div>
      </section>
    </>
  );
}
