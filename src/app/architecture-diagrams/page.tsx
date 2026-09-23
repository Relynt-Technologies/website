import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Eyebrow, SectionHead, CtaBand, Steps, PriceCard } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Architecture Diagram Services",
  description:
    "Cloud, system, network and data-flow diagrams drafted by senior architects and kept current release over release.",
};

const types = [
  { icon: "Cloud", title: "Cloud Architecture", text: "AWS, Azure and GCP-ready diagrams showing services, regions and data paths." },
  { icon: "Layers", title: "C4 Model Diagrams", text: "Context, container, component and code-level views for engineering onboarding." },
  { icon: "GitBranch", title: "Network Topology", text: "Physical and logical network maps for infra, security and compliance reviews." },
  { icon: "Boxes", title: "Data Flow Diagrams", text: "Trace how data moves through systems &mdash; ideal for privacy and security audits." },
  { icon: "Users", title: "Sequence Diagrams", text: "Request/response flows across services, APIs and third-party integrations." },
  { icon: "Target", title: "System Design Docs", text: "Full design documentation packages for RFCs, ADRs and technical proposals." },
  { icon: "Pen", title: "Custom Infographics", text: "Investor-deck and stakeholder-ready visuals that simplify without dumbing down." },
  { icon: "FileText", title: "Living Documentation", text: "Diagrams re-generated and version-controlled alongside your codebase changes." },
] as const;

export default function ArchitectureDiagramsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/services">Services</Link>
            <span className="sep">/</span>Architecture Diagrams
          </div>
          <div className="two-col">
            <div>
              <Eyebrow>Architecture Diagram Services</Eyebrow>
              <h1>Systems your whole team can actually understand.</h1>
              <p className="lead">
                Senior architects turn your infrastructure, codebase and data flows into clear,
                presentation-ready diagrams &mdash; C4 model, cloud-native, and kept current as
                your systems change.
              </p>
              <div className="hero-actions">
                <Link href="/contact" className="btn btn-primary">
                  Request a Diagram <Icon name="ArrowRight" />
                </Link>
                <a href="#arch-pricing" className="btn btn-ghost">
                  See Pricing
                </a>
              </div>
            </div>
            <div className="card" style={{ boxShadow: "var(--shadow-lg)" }}>
              <div className="hero-card-row">
                <div>
                  <strong>Diagrams Delivered</strong>
                </div>
                <span className="status-pill ok">1,200+</span>
              </div>
              <div className="hero-card-row">
                <div>
                  <strong>Formats</strong>
                </div>
                <span className="status-pill info">Figma &middot; SVG &middot; PNG &middot; PDF</span>
              </div>
              <div className="hero-card-row">
                <div>
                  <strong>Avg. Delivery</strong>
                </div>
                <span className="status-pill info">
                  <Icon name="Clock" /> 3&ndash;5 days
                </span>
              </div>
              <div className="hero-card-row">
                <div>
                  <strong>Revisions</strong>
                </div>
                <span className="status-pill ok">Unlimited on active plans</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead center eyebrow="Diagram types" title="Whatever you need to visualize, we draw it" />
          <div className="grid grid-4">
            {types.map((c) => (
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
          <SectionHead center eyebrow="Process" title="From a call to a finished diagram set" />
          <Steps
            steps={[
              { num: 1, title: "Share your systems", text: "A walkthrough call, repo access, or existing docs &mdash; whatever you have works." },
              { num: 2, title: "Architect review", text: "A senior architect maps components, dependencies and data flows." },
              { num: 3, title: "Draft & iterate", text: "First draft within days, with revision rounds until it's exactly right." },
              { num: 4, title: "Deliver & maintain", text: "Final files in your preferred format, with optional ongoing updates each release." },
            ]}
          />
        </div>
      </section>

      <section className="section" id="arch-pricing">
        <div className="container">
          <SectionHead center eyebrow="Pricing" title="Project-based or ongoing retainer" />
          <div className="grid grid-3">
            <PriceCard
              title="Single Diagram"
              subtitle="One polished diagram, fast."
              amount={
                <>
                  &#8377;7,999<span>/diagram</span>
                </>
              }
              features={[
                "1 diagram, any type",
                "2 revision rounds",
                "SVG + PNG + PDF export",
                "3–5 day delivery",
              ]}
              cta={{ label: "Get Started", href: "/contact" }}
            />
            <PriceCard
              title="Team Package"
              subtitle="For a full system or product documentation set."
              amount={
                <>
                  &#8377;34,999<span>/package</span>
                </>
              }
              features={[
                "Up to 6 diagrams",
                "Unlimited revisions",
                "Editable Figma source files",
                "Dedicated architect",
              ]}
              cta={{ label: "Get Started", href: "/contact", variant: "btn-primary" }}
              featured
              tag="Most Popular"
            />
            <PriceCard
              title="Retainer"
              subtitle="For teams shipping continuously."
              amount="Custom"
              features={[
                "Ongoing diagram updates",
                "Synced to release cycles",
                "Priority turnaround",
                "Quarterly architecture review",
              ]}
              cta={{ label: "Talk to Sales", href: "/contact" }}
            />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <CtaBand
            title="Turn tribal knowledge into clear diagrams"
            text="Send us a repo or a whiteboard photo &mdash; we'll turn it into documentation your team will actually use."
            button={{ label: "Request a Diagram", href: "/contact" }}
          />
        </div>
      </section>
    </>
  );
}
