import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Eyebrow, SectionHead, CtaBand, Steps, CheckList } from "@/components/Sections";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="hero-badge">
              <Icon name="Sparkles" /> Trusted by 120+ growing teams
            </div>
            <h1>Trust, Compliance &amp; Clarity - delivered as a service.</h1>
            <p className="lead">
              Relynt helps you hire with confidence, stay compliant with global privacy law,
              and communicate your systems clearly - through background verification,
              cookie &amp; consent compliance, and enterprise architecture diagrams.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">
                Get Started <Icon name="ArrowRight" />
              </Link>
              <Link href="/services" className="btn btn-ghost">
                Explore Services
              </Link>
            </div>
            <div className="hero-trust">
              <div>
                <strong>48hrs</strong>Avg. BGV turnaround
              </div>
              <div>
                <strong>99.9%</strong>Compliance accuracy
              </div>
              <div>
                <strong>300+</strong>Diagrams delivered
              </div>
              <div>
                <strong>120+</strong>Companies onboarded
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
            <div className="hero-card">
              <div className="tag-row">
                <span className="tag">Live Case #RB-4471</span>
              </div>
              <div className="hero-card-row">
                <div>
                  <strong style={{ color: "var(--primary)" }}>Identity Verification</strong>
                  <div style={{ fontSize: ".8rem", color: "var(--muted-2)" }}>
                    Aadhaar + PAN cross-check
                  </div>
                </div>
                <span className="status-pill ok">
                  <Icon name="Check" /> Verified
                </span>
              </div>
              <div className="hero-card-row">
                <div>
                  <strong style={{ color: "var(--primary)" }}>Employment History</strong>
                  <div style={{ fontSize: ".8rem", color: "var(--muted-2)" }}>
                    3 organizations, 6 yrs
                  </div>
                </div>
                <span className="status-pill ok">
                  <Icon name="Check" /> Verified
                </span>
              </div>
              <div className="hero-card-row">
                <div>
                  <strong style={{ color: "var(--primary)" }}>Education Records</strong>
                  <div style={{ fontSize: ".8rem", color: "var(--muted-2)" }}>
                    Degree &amp; transcript check
                  </div>
                </div>
                <span className="status-pill pending">In Progress</span>
              </div>
              <div className="hero-card-row">
                <div>
                  <strong style={{ color: "var(--primary)" }}>Cookie Consent Audit</strong>
                  <div style={{ fontSize: ".8rem", color: "var(--muted-2)" }}>
                    GDPR / DPDP scan
                  </div>
                </div>
                <span className="status-pill info">
                  <Icon name="Cookie" /> Scheduled
                </span>
              </div>
              <Link href="/bgv" className="btn btn-primary btn-block" style={{ marginTop: 18 }}>
                View Full Report
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-strip">
        <div className="container stats-grid">
          <div>
            <strong>10k+</strong>
            <span>Verifications completed</span>
          </div>
          <div>
            <strong>40+</strong>
            <span>Countries covered</span>
          </div>
          <div>
            <strong>500+</strong>
            <span>Cookie audits shipped</span>
          </div>
          <div>
            <strong>1,200+</strong>
            <span>Architecture diagrams delivered</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            center
            eyebrow="What we do"
            title="Three services. One trusted partner."
            lead="Whatever stage you're at - hiring, scaling, or shipping - Relynt gives you the verification, compliance and documentation infrastructure to move faster with confidence."
          />
          <div className="grid grid-3">
            <div className="card">
              <div className="icon-tile">
                <Icon name="Shield" />
              </div>
              <h3>Background Verification</h3>
              <p>
                Employment, education, identity, address and criminal record checks -
                automated where possible, human-reviewed where it matters. Reports in as little
                as 48 hours.
              </p>
              <a href="/bgv" className="card-link">
                Explore BGV <Icon name="ArrowRight" />
              </a>
            </div>
            <div className="card dark">
              <div className="icon-tile">
                <Icon name="Cookie" />
              </div>
              <h3>EU Compliance</h3>
              <p>
                Cookie scanning, consent management platforms, and policy generation mapped to
                GDPR, CCPA, and India&apos;s DPDP Act - so every visitor&apos;s consent is
                logged and defensible.
              </p>
              <a href="/cookie-compliance" className="card-link" style={{ color: "var(--secondary)" }}>
                Explore EU Compliance <Icon name="ArrowRight" />
              </a>
            </div>
            <div className="card">
              <div className="icon-tile">
                <Icon name="Boxes" />
              </div>
              <h3>Virtual CISO Services</h3>
              <p>
                Fractional security leadership from senior practitioners - architecture
                &amp; design, risk scoping, and continuous review &amp; compliance across your
                environment.
              </p>
              <a href="/architecture-diagrams" className="card-link">
                Explore vCISO Services <Icon name="ArrowRight" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="two-col">
            <div>
              <Eyebrow>Why Relynt</Eyebrow>
              <h2>Built for teams who can&apos;t afford to guess.</h2>
              <p className="lead">
                Compliance and trust aren&apos;t checkboxes - they&apos;re infrastructure.
                We built Relynt so your HR, legal, and engineering teams get accurate answers
                fast, with an audit trail behind every one.
              </p>
              <CheckList
                items={[
                  <>
                    <strong>Fast, not reckless</strong> - automated checks paired with
                    manual review on every flagged case.
                  </>,
                  <>
                    <strong>Compliance-first</strong> - every workflow mapped to the
                    regulation that governs it.
                  </>,
                  <>
                    <strong>Transparent pricing</strong> - know your cost per check, per
                    banner, per diagram upfront.
                  </>,
                  <>
                    <strong>Dedicated specialists</strong> - a named point of contact, not
                    a ticket queue.
                  </>,
                ]}
              />
            </div>
            <div className="grid grid-2" style={{ gap: 20 }}>
              <div className="card">
                <div className="icon-tile">
                  <Icon name="Clock" />
                </div>
                <h3>48hr Turnaround</h3>
                <p>Standard BGV reports delivered in two business days or less.</p>
              </div>
              <div className="card">
                <div className="icon-tile">
                  <Icon name="Lock" />
                </div>
                <h3>Enterprise Security</h3>
                <p>ISO 27001-aligned handling and encryption for every record.</p>
              </div>
              <div className="card">
                <div className="icon-tile">
                  <Icon name="Globe" />
                </div>
                <h3>Global Coverage</h3>
                <p>Checks and compliance mapping across 40+ countries.</p>
              </div>
              <div className="card">
                <div className="icon-tile">
                  <Icon name="Users" />
                </div>
                <h3>Human-Reviewed</h3>
                <p>Every discrepancy is reviewed by a specialist before it reaches you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            center
            eyebrow="How it works"
            title="From request to report in four steps"
          />
          <Steps
            steps={[
              {
                num: 1,
                title: "Tell us what you need",
                text: "Pick a service - BGV, cookie compliance, or architecture diagrams - and share your requirements through a short form or call.",
              },
              {
                num: 2,
                title: "We scope & confirm",
                text: "A specialist maps your request to the right checks, regulations, or diagram types and confirms turnaround and pricing.",
              },
              {
                num: 3,
                title: "We do the work",
                text: "Automated tooling plus human review handles verification, scanning, or drafting - with progress visible throughout.",
              },
              {
                num: 4,
                title: "You get a clear deliverable",
                text: "A report, a live compliant banner, or a polished diagram set - documented, versioned, and ready to act on.",
              },
            ]}
          />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHead center eyebrow="Testimonials" title="Teams that rely on Relynt" />
          <div className="grid grid-3">
            <div className="quote-card">
              <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p>
                &quot;Relynt cut our background check turnaround from 8 days to under 2. Our TA
                team finally trusts the process.&quot;
              </p>
              <div className="quote-author">
                <div className="avatar">AK</div>
                <div>
                  <strong>Aditi Kulkarni</strong>
                  <span>Head of Talent, Finlace Corp</span>
                </div>
              </div>
            </div>
            <div className="quote-card">
              <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p>
                &quot;The cookie compliance rollout was painless - DPDP-ready banners live
                across 12 domains within a week.&quot;
              </p>
              <div className="quote-author">
                <div className="avatar">RS</div>
                <div>
                  <strong>Rahul Sen</strong>
                  <span>DPO, Nimbus Retail</span>
                </div>
              </div>
            </div>
            <div className="quote-card">
              <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p>
                &quot;Our onboarding docs finally match reality. The architecture diagrams team
                keeps them updated every release.&quot;
              </p>
              <div className="quote-author">
                <div className="avatar">PM</div>
                <div>
                  <strong>Priya Menon</strong>
                  <span>VP Engineering, Stackwell</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <CtaBand
            title="Ready to see Relynt in action?"
            text="Book a 20-minute walkthrough tailored to BGV, cookie compliance, or architecture diagrams."
            button={{ label: "Book a Demo", href: "/contact" }}
            secondary={{ label: "View Pricing", href: "/services" }}
          />
        </div>
      </section>
    </>
  );
}
