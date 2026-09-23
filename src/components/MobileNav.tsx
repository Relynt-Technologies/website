"use client";

import { useEffect } from "react";
import Link from "next/link";

const serviceLinks = [
  { href: "/bgv", label: "Background Verification" },
  { href: "/cookie-compliance", label: "Cookie Compliance" },
  { href: "/architecture-diagrams", label: "Architecture Diagrams" },
];

export default function MobileNav() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = document.getElementById("mnav");
      if (el && e.target === el) el.classList.remove("open");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const close = () => {
    const el = document.getElementById("mnav");
    if (el) el.classList.remove("open");
  };

  return (
    <div className="mobile-nav" id="mnav">
      <div className="mobile-nav-panel">
        <button className="mobile-nav-close" onClick={close} aria-label="Close menu">
          &times;
        </button>
        <Link href="/" onClick={close}>
          Home
        </Link>
        <Link href="/services" onClick={close}>
          Services
        </Link>
        {serviceLinks.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            onClick={close}
            style={{ paddingLeft: 24, fontWeight: 600 }}
          >
            &rsaquo; {s.label}
          </Link>
        ))}
        <Link href="/about" onClick={close}>
          About
        </Link>
        <Link href="/contact" onClick={close}>
          Contact
        </Link>
        <Link href="/contact" onClick={close} style={{ color: "var(--secondary-600)" }}>
          Get a Quote &rarr;
        </Link>
      </div>
    </div>
  );
}
