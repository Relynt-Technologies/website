"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          service: data.get("service"),
          message: data.get("message"),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="form-card">
      <h3 style={{ marginBottom: 24 }}>Send us a message</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="field">
            <label htmlFor="fname">Full Name</label>
            <input id="fname" name="name" type="text" placeholder="Jordan Lee" required />
          </div>
          <div className="field">
            <label htmlFor="femail">Work Email</label>
            <input id="femail" name="email" type="email" placeholder="jordan@company.com" required />
          </div>
        </div>
        <div className="form-row">
          <div className="field">
            <label htmlFor="fcompany">Company</label>
            <input id="fcompany" name="company" type="text" placeholder="Company Pvt. Ltd." />
          </div>
          <div className="field">
            <label htmlFor="fservice">Service Needed</label>
            <select id="fservice" name="service">
              <option>Background Verification</option>
              <option>Cookie &amp; Consent Compliance</option>
              <option>Architecture Diagram Services</option>
              <option>Not sure yet</option>
            </select>
          </div>
        </div>
        <div className="field full" style={{ marginBottom: 18 }}>
          <label htmlFor="fmessage">Message</label>
          <textarea id="fmessage" name="message" placeholder="Tell us a bit about what you need..."></textarea>
        </div>
        {status === "idle" ? (
          <button type="submit" className="btn btn-primary btn-block form-submit">
            Send Message <Icon name="ArrowRight" />
          </button>
        ) : status === "submitting" ? (
          <button type="submit" className="btn btn-primary btn-block form-submit" disabled>
            Sending...
          </button>
        ) : status === "success" ? (
          <div
            className="form-success"
            style={{ padding: 16, background: "var(--secondary-100)", borderRadius: 12, color: "var(--primary-700)", fontWeight: 600, textAlign: "center", display: "block" }}
          >
            <Icon name="Check" /> Thanks! Your message has been sent. We&apos;ll be in touch
            shortly.
          </div>
        ) : (
          <div
            className="form-success"
            style={{ padding: 16, background: "#fdecec", borderRadius: 12, color: "#b42318", fontWeight: 600, textAlign: "center", display: "block" }}
          >
            Something went wrong. Please try again.
          </div>
        )}
      </form>
    </div>
  );
}