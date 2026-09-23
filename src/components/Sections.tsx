import Link from "next/link";
import { Icon, IconName } from "./Icon";

export const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="eyebrow">
    <span className="dot"></span> {children}
  </div>
);

type SectionHeadProps = {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  center?: boolean;
};

export const SectionHead = ({ eyebrow, title, lead, center }: SectionHeadProps) => (
  <div className={center ? "section-head center" : "section-head"}>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h2>{title}</h2>
    {lead && <p className="lead">{lead}</p>}
  </div>
);

type CtaBandProps = {
  title: React.ReactNode;
  text: React.ReactNode;
  button: { label: string; href: string; variant?: string };
  secondary?: { label: string; href: string };
};

export const CtaBand = ({ title, text, button, secondary }: CtaBandProps) => (
  <div className="cta-band">
    <div>
      <h2 style={{ marginBottom: 10 }}>{title}</h2>
      <p>{text}</p>
    </div>
    <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
      <Link href={button.href} className={`btn ${button.variant || "btn-white"}`}>
        {button.label}
      </Link>
      {secondary && (
        <Link href={secondary.href} className="btn btn-outline-light">
          {secondary.label}
        </Link>
      )}
    </div>
  </div>
);

type IconTileProps = {
  name: IconName;
  dark?: boolean;
};

export const IconTile = ({ name }: IconTileProps) => (
  <div className="icon-tile">
    <Icon name={name} />
  </div>
);

export const CheckList = ({ items }: { items: React.ReactNode[] }) => (
  <ul className="check-list" style={{ marginTop: 20 }}>
    {items.map((item, i) => (
      <li key={i}>
        <Icon name="Check" /> {item}
      </li>
    ))}
  </ul>
);

type StepProps = {
  num: number;
  title: string;
  text: string;
};

export const Steps = ({ steps }: { steps: StepProps[] }) => (
  <div className="steps">
    {steps.map((s) => (
      <div className="step" key={s.num}>
        <div className="num">{s.num}</div>
        <h3>{s.title}</h3>
        <p>{s.text}</p>
      </div>
    ))}
  </div>
);

type StatProps = {
  value: string;
  label: string;
  dark?: boolean;
};

export const StatsGrid = ({ stats, dark }: { stats: StatProps[]; dark?: boolean }) => (
  <div className="stats-grid" style={dark ? undefined : { color: "var(--primary)" }}>
    {stats.map((s) => (
      <div key={s.label}>
        <strong style={dark ? undefined : { color: "var(--primary)" }}>{s.value}</strong>
        <span style={dark ? undefined : { color: "var(--muted)" }}>{s.label}</span>
      </div>
    ))}
  </div>
);

type PriceCardProps = {
  title: string;
  subtitle: string;
  amount: React.ReactNode;
  unit?: string;
  features: string[];
  cta: { label: string; href: string; variant?: string };
  featured?: boolean;
  tag?: string;
};

export const PriceCard = ({
  title,
  subtitle,
  amount,
  features,
  cta,
  featured,
  tag,
}: PriceCardProps) => (
  <div className={featured ? "price-card featured" : "price-card"}>
    {tag && <span className="tag">{tag}</span>}
    <h3>{title}</h3>
    <p>{subtitle}</p>
    <div className="price-amount">{amount}</div>
    <CheckList items={features.map((f) => <span>{f}</span>)} />
    <Link
      href={cta.href}
      className={`btn ${cta.variant || "btn-ghost"} btn-block`}
      style={{ marginTop: 20 }}
    >
      {cta.label}
    </Link>
  </div>
);
