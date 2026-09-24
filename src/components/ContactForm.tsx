"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="form-card">
      <h3 style={{ marginBottom: 24 }}>Send us a message</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        <div className="form-row">
          <div className="field">
            <label htmlFor="fname">Full Name</label>
            <input id="fname" type="text" placeholder="Jordan Lee" required />
          </div>
          <div className="field">
            <label htmlFor="femail">Work Email</label>
            <input id="femail" type="email" placeholder="jordan@company.com" required />
          </div>
        </div>
        <div className="form-row">
          <div className="field">
            <label htmlFor="fcompany">Company</label>
            <input id="fcompany" type="text" placeholder="Company Pvt. Ltd." />
          </div>
          <div className="field">
            <label htmlFor="fservice">Service Needed</label>
            <select id="fservice">
              <option>Background Verification</option>
              <option>Cookie &amp; Consent Compliance</option>
              <option>Architecture Diagram Services</option>
              <option>Not sure yet</option>
            </select>
          </div>
        </div>
        <div className="field full" style={{ marginBottom: 18 }}>
          <label htmlFor="fmessage">Message</label>
          <textarea id="fmessage" placeholder="Tell us a bit about what you need..."></textarea>
        </div>
        {!submitted ? (
          <button type="submit" className="btn btn-primary btn-block form-submit">
            Send Message <Icon name="ArrowRight" />
          </button>
        ) : (
          <div
            className="form-success"
            style={{ padding: 16, background: "var(--secondary-100)", borderRadius: 12, color: "var(--primary-700)", fontWeight: 600, textAlign: "center", display: "block" }}
          >
            <Icon name="Check" /> Thanks! This is a demo form - wire it up to your email
            or CRM to start receiving messages.
          </div>
        )}
      </form>
    </div>
  );
}
