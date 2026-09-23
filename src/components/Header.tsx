"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Icon } from "./Icon";

const serviceLinks = [
  {
    href: "/bgv",
    label: "Background Verification",
    sub: "Employment, education & ID checks",
  },
  {
    href: "/cookie-compliance",
    label: "Cookie Compliance",
    sub: "Consent banners & regulatory audits",
  },
  {
    href: "/architecture-diagrams",
    label: "Architecture Diagrams",
    sub: "Cloud, system & network visuals",
  },
];

type NavItem = { name: string; path: string };

const navItems: NavItem[] = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "about", path: "/about" },
  { name: "contact", path: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const isActive = (path: string) => (pathname === path ? "active" : "");

  return (
    <header className="site-header">
      <div className="nav">
        <Link href="/" className="brand" aria-label="Relynt home">
          <Image
            src="/logo/relynt_logo.png"
            alt="Relynt"
            width={1530}
            height={615}
            className="brand-logo"
            priority
          />
        </Link>
        <nav className="nav-links">
          <Link href="/" className={isActive("/")}>
            Home
          </Link>
          <div className="dropdown">
            <Link
              href="/services"
              className={
                pathname === "/services" ||
                pathname === "/bgv" ||
                pathname === "/cookie-compliance" ||
                pathname === "/architecture-diagrams"
                  ? "active"
                  : ""
              }
            >
              Services
            </Link>
            <div className="dropdown-menu">
              {serviceLinks.map((s) => (
                <Link key={s.href} href={s.href}>
                  <span>{s.label}</span>
                  <small>{s.sub}</small>
                </Link>
              ))}
            </div>
          </div>
          <Link href="/about" className={isActive("/about")}>
            About
          </Link>
          <Link href="/contact" className={isActive("/contact")}>
            Contact
          </Link>
        </nav>
        <div className="nav-cta">
          <Link href="/contact" className="btn btn-ghost btn-sm">
            Log In
          </Link>
          <Link href="/contact" className="btn btn-primary btn-sm">
            Get a Quote <Icon name="ArrowRight" />
          </Link>
          <button
            className="nav-toggle"
            aria-label="Open menu"
            onClick={() => {
              const el = document.getElementById("mnav");
              if (el) el.classList.add("open");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
