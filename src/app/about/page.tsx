import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Eyebrow, CtaBand, StatsGrid } from "@/components/Sections";

export const metadata: Metadata = {
  title: "About",
  description:
    "Relynt is a trust infrastructure company delivering background verification, cookie compliance, and architecture diagram services.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>About
          </div>
          <Eyebrow>About Relynt</Eyebrow>
          <h1 style={{ maxWidth: 680 }}>
            Trust infrastructure for teams who move fast.
          </h1>
          <p className="lead" style={{ maxWidth: 640 }}>
            Relynt was built on a simple idea: verification, compliance and documentation
            shouldn&apos;t slow you down. They should be a service you trust and forget about
            &mdash; because it&apos;s always working correctly in the background.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <Eyebrow>Our Story</Eyebrow>
            <h2>Started by people tired of slow, opaque compliance work</h2>
            <p>
              Relynt began when our founders &mdash; former HR-tech and cloud infrastructure
              operators &mdash; kept running into the same three walls: background checks that
              took weeks, cookie compliance that lawyers dreaded touching, and architecture
              documentation that was outdated the moment it was published.
            </p>
            <p>
              Instead of building three separate companies, we built one team of specialists who
              could move fast in each domain, backed by a shared standard for accuracy, security
              and communication. Today Relynt supports over 120 companies across hiring, product,
              and engineering teams.
            </p>
          </div>
          <div className="grid grid-2" style={{ gap: 20 }}>
            <div className="card">
              <div className="icon-tile">
                <Icon name="Target" />
              </div>
              <h3>Our Mission</h3>
              <p>
                Make trust and compliance infrastructure fast enough that no team has to choose
                between speed and doing it right.
              </p>
            </div>
            <div className="card">
              <div className="icon-tile">
                <Icon name="Heart" />
              </div>
              <h3>Our Values</h3>
              <p>
                Accuracy over speed when it matters, transparency by default, and a named human
                behind every engagement.
              </p>
            </div>
            <div className="card">
              <div className="icon-tile">
                <Icon name="Shield" />
              </div>
              <h3>How We Work</h3>
              <p>
                Automation handles the repeatable work; specialists handle judgment calls,
                exceptions and quality review.
              </p>
            </div>
            <div className="card">
              <div className="icon-tile">
                <Icon name="Users" />
              </div>
              <h3>Who We Serve</h3>
              <p>
                HR &amp; TA teams, DPOs and legal teams, and engineering leaders at growth-stage
                and enterprise companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <StatsGrid
            stats={[
              { value: "2021", label: "Founded" },
              { value: "120+", label: "Companies served" },
              { value: "40+", label: "Countries covered" },
              { value: "35", label: "Team members" },
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <Eyebrow>Leadership</Eyebrow>
            <h2>A small team, deliberately</h2>
            <p className="lead">
              Each service line is led by a specialist with direct domain experience &mdash; not
              a generalist spread across all three.
            </p>
          </div>
          <div className="grid grid-3">
            <div className="card" style={{ textAlign: "center" }}>
              <div
                className="avatar"
                style={{ margin: "0 auto 16px", width: 64, height: 64, fontSize: "1.3rem" }}
              >
                NV
              </div>
              <h3>Nikhil Varma</h3>
              <p style={{ color: "var(--secondary-600)", fontWeight: 700, marginBottom: 10 }}>
                Co-Founder &amp; CEO
              </p>
              <p>
                Formerly built HR-tech screening tools; leads BGV strategy and enterprise
                partnerships.
              </p>
            </div>
            <div className="card" style={{ textAlign: "center" }}>
              <div
                className="avatar"
                style={{ margin: "0 auto 16px", width: 64, height: 64, fontSize: "1.3rem" }}
              >
                SA
              </div>
              <h3>Sanya Arora</h3>
              <p style={{ color: "var(--secondary-600)", fontWeight: 700, marginBottom: 10 }}>
                Head of Privacy &amp; Compliance
              </p>
              <p>
                Ex-legal counsel specializing in data protection; leads the cookie &amp; consent
                practice.
              </p>
            </div>
            <div className="card" style={{ textAlign: "center" }}>
              <div
                className="avatar"
                style={{ margin: "0 auto 16px", width: 64, height: 64, fontSize: "1.3rem" }}
              >
                DK
              </div>
              <h3>Dev Kapoor</h3>
              <p style={{ color: "var(--secondary-600)", fontWeight: 700, marginBottom: 10 }}>
                Head of Architecture Practice
              </p>
              <p>
                Former principal cloud architect; leads the diagram &amp; documentation team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <CtaBand
            title="Want to work with us?"
            text="We're always looking for specialists in verification, privacy law, and systems architecture."
            button={{ label: "Get in Touch", href: "/contact" }}
          />
        </div>
      </section>
    </>
  );
}
