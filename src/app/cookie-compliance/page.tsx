import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Eyebrow, SectionHead, CtaBand, Steps, PriceCard } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Cookie & Consent Compliance",
  description:
    "Cookie scanning, consent management banners, and policy generation mapped to GDPR, CCPA and India's DPDP Act.",
};

const included = [
  { icon: "Cookie", title: "Cookie Scanning", text: "Automated crawl of your site to catalogue every first- and third-party cookie and tracker." },
  { icon: "Check", title: "Consent Banner", text: "Fully customizable, brand-matched banner with granular opt-in/opt-out controls." },
  { icon: "Scissors", title: "Regulatory Mapping", text: "Consent flows tailored to GDPR, CCPA/CPRA, India's DPDP Act, and more as you expand." },
  { icon: "FileText", title: "Policy Generator", text: "Auto-drafted, lawyer-reviewed cookie and privacy policy kept in sync with your scan results." },
  { icon: "Shield", title: "Consent Logs", text: "Timestamped, exportable consent records ready for audits and data subject requests." },
  { icon: "GitBranch", title: "Multi-Domain Support", text: "Manage consent across unlimited domains and subdomains from one dashboard." },
  { icon: "Clock", title: "Scheduled Re-Scans", text: "Monthly or quarterly re-audits catch new trackers before they become a liability." },
  { icon: "Globe", title: "Geo-Aware Consent", text: "Automatically serve the correct consent flow based on visitor location." },
] as const;

export default function CookieCompliancePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/services">Services</Link>
            <span className="sep">/</span>Cookie Compliance
          </div>
          <div className="two-col">
            <div>
              <Eyebrow>Cookie &amp; Consent Compliance</Eyebrow>
              <h1>Every cookie accounted for. Every consent logged.</h1>
              <p className="lead">
                We audit your site&apos;s tracking footprint, deploy a compliant consent banner,
                and generate the policies that hold up under GDPR, CCPA and India&apos;s DPDP Act
                - so regulators and users both trust what you collect.
              </p>
              <div className="hero-actions">
                <Link href="/contact" className="btn btn-primary">
                  Run a Free Cookie Scan <Icon name="ArrowRight" />
                </Link>
                <a href="#cookie-pricing" className="btn btn-ghost">
                  See Pricing
                </a>
              </div>
            </div>
            <div className="card" style={{ boxShadow: "var(--shadow-lg)" }}>
              <div className="hero-card-row">
                <div>
                  <strong>Cookies Scanned</strong>
                </div>
                <span className="status-pill info">
                  <Icon name="Cookie" /> 187 found
                </span>
              </div>
              <div className="hero-card-row">
                <div>
                  <strong>Consent Rate</strong>
                </div>
                <span className="status-pill ok">73% opt-in</span>
              </div>
              <div className="hero-card-row">
                <div>
                  <strong>Regulations Mapped</strong>
                </div>
                <span className="status-pill ok">GDPR &middot; CCPA &middot; DPDP</span>
              </div>
              <div className="hero-card-row">
                <div>
                  <strong>Banner Status</strong>
                </div>
                <span className="status-pill ok">
                  <Icon name="Check" /> Live
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead center eyebrow="What's included" title="A complete cookie & consent stack" />
          <div className="grid grid-4">
            {included.map((c) => (
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
          <SectionHead center eyebrow="Process" title="Live and compliant within a week" />
          <Steps
            steps={[
              { num: 1, title: "Free cookie scan", text: "We crawl your site and flag every tracker, cookie, and pixel currently firing." },
              { num: 2, title: "Configure your banner", text: "Choose categories, styling, and the regulations that apply to your audience." },
              { num: 3, title: "Deploy & test", text: "One script tag goes live on staging, then production, with full QA support." },
              { num: 4, title: "Monitor & re-scan", text: "Ongoing scans and consent logs keep you audit-ready as your stack changes." },
            ]}
          />
        </div>
      </section>

      <section className="section" id="cookie-pricing">
        <div className="container">
          <SectionHead center eyebrow="Pricing" title="Plans for every stage" />
          <div className="grid grid-3">
            <PriceCard
              title="Starter"
              subtitle="For a single site getting compliant fast."
              amount={
                <>
                  &#8377;3,999<span>/mo</span>
                </>
              }
              features={[
                "1 domain",
                "Monthly cookie scan",
                "Standard consent banner",
                "GDPR + CCPA templates",
              ]}
              cta={{ label: "Get Started", href: "/contact" }}
            />
            <PriceCard
              title="Growth"
              subtitle="For multi-domain products and apps."
              amount={
                <>
                  &#8377;8,999<span>/mo</span>
                </>
              }
              features={[
                "Up to 5 domains",
                "Weekly cookie scans",
                "Custom-branded banner",
                "GDPR + CCPA + DPDP mapping",
                "Exportable consent logs",
              ]}
              cta={{ label: "Get Started", href: "/contact", variant: "btn-primary" }}
              featured
              tag="Most Popular"
            />
            <PriceCard
              title="Enterprise"
              subtitle="For regulated industries and global footprints."
              amount="Custom"
              features={[
                "Unlimited domains",
                "Daily monitoring",
                "Legal review included",
                "Dedicated DPO liaison",
              ]}
              cta={{ label: "Talk to Sales", href: "/contact" }}
            />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <CtaBand
            title="Not sure what's on your site?"
            text="Run a free, no-signup cookie scan and get your report in minutes."
            button={{ label: "Run Free Scan", href: "/contact" }}
          />
        </div>
      </section>
    </>
  );
}
