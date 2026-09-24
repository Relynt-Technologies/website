import type { Metadata } from "next";
import Link from "next/link";
import { Icon, type IconName } from "@/components/Icon";
import { Eyebrow, SectionHead } from "@/components/Sections";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Relynt to scope a background verification, cookie compliance, or architecture diagram engagement.",
};

const infoCards: { icon: IconName; title: string; lines: string[] }[] = [
  {
    icon: "Mail",
    title: "Email",
    lines: [
      "hello@relynt.io",
      "support@relynt.io",
    ] as string[],
  },
  {
    icon: "Phone",
    title: "Phone",
    lines: [
      "+91 80 4567 1234",
      "Mon–Fri, 9am–7pm IST",
    ] as string[],
  },
  {
    icon: "MapPin",
    title: "Office",
    lines: [
      "4th Floor, Prestige Tech Park",
      "Bengaluru, Karnataka 560103, India",
    ] as string[],
  },
];

const faqs = [
  { q: "How fast can we get started?", a: "Most clients complete onboarding and submit their first request within a day of the initial call." },
  { q: "Can we bundle multiple services?", a: "Yes - many clients combine BGV with cookie compliance or architecture documentation under one contract." },
  { q: "Do you support international teams?", a: "Background checks and compliance mapping are available across 40+ countries; diagram services are fully remote." },
  { q: "Is there a minimum contract length?", a: "No - Basic and Starter plans are pay-as-you-go. Enterprise plans include custom terms." },
];

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>Contact
          </div>
          <Eyebrow>Contact Us</Eyebrow>
          <h1 style={{ maxWidth: 680 }}>Let&apos;s scope your first engagement.</h1>
          <p className="lead" style={{ maxWidth: 640 }}>
            Tell us which service you need - background verification, cookie compliance,
            or architecture diagrams - and a specialist will follow up within one business
            day.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two-col" style={{ alignItems: "flex-start" }}>
          <ContactForm />
          <div>
            {infoCards.map((c) => (
              <div className="info-card" key={c.title}>
                <div className="icon-tile">
                  <Icon name={c.icon} />
                </div>
                <div>
                  <h3 style={{ marginBottom: 4 }}>{c.title}</h3>
                  <p>
                    {c.lines.map((l, i) => (
                      <span key={i}>
                        {l}
                        {i < c.lines.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
            <div className="badge-row" style={{ marginTop: 28 }}>
              <div className="badge">
                <Icon name="Lock" /> ISO 27001-aligned
              </div>
              <div className="badge">
                <Icon name="Clock" /> 1 business day response
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHead center eyebrow="FAQ" title="Common questions" />
          <div className="grid grid-2">
            {faqs.map((f) => (
              <div className="card" key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
