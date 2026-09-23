import Link from "next/link";
import Image from "next/image";
import { Icon } from "./Icon";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="brand footer-brand-logo" aria-label="Relynt home">
              <Image
                src="/logo/relynt_logo.png"
                alt="Relynt"
                width={1530}
                height={615}
                className="brand-logo"
              />
            </Link>
            <p>
              Trust infrastructure for modern teams &mdash; background verification, cookie
              &amp; privacy compliance, and enterprise architecture diagrams, delivered as a
              service.
            </p>
            <div className="social-row" style={{ marginTop: 22 }}>
              <a href="#" aria-label="LinkedIn">
                <Icon name="LinkedIn" />
              </a>
              <a href="#" aria-label="Twitter">
                <Icon name="Twitter" />
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <Link href="/bgv">Background Verification</Link>
              </li>
              <li>
                <Link href="/cookie-compliance">Cookie Compliance</Link>
              </li>
              <li>
                <Link href="/architecture-diagrams">Architecture Diagrams</Link>
              </li>
              <li>
                <Link href="/services">All Services</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/contact">Careers</Link>
              </li>
              <li>
                <Link href="/contact">Partners</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Relynt Technologies Pvt. Ltd. All rights reserved.</span>
          <span>
            Made with care &middot; ISO 27001-aligned data handling
          </span>
        </div>
      </div>
    </footer>
  );
}
