import { NextResponse } from "next/server";
import { BrevoClient } from "@getbrevo/brevo";

const brevo = new BrevoClient({
  apiKey: process.env.BREVO_API_KEY || "",
});

const SENDER = {
  name: "Relynt",
  email: process.env.BREVO_SENDER_EMAIL || "no-reply@relynt.dev",
};

const NOTIFY_EMAIL = "hello@relyntai.com";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const company = String(body.company || "").trim();
  const service = String(body.service || "").trim();
  const message = String(body.message || "").trim();

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 }
    );
  }

  try {
    await Promise.all([
      brevo.transactionalEmails.sendTransacEmail({
        subject: "Thanks for reaching out to Relynt",
        htmlContent: `
          <p>Hi ${escapeHtml(name)},</p>
          <p>Thanks for contacting Relynt. We've received your inquiry${company ? ` for ${escapeHtml(company)}` : ""} and a specialist will get back to you within one business day.</p>
          ${service ? `<p><strong>Service needed:</strong> ${escapeHtml(service)}</p>` : ""}
          ${message ? `<p><strong>Your message:</strong><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>` : ""}
          <p>— The Relynt team</p>
        `,
        textContent: `
          Hi ${name},

          Thanks for contacting Relynt. We've received your inquiry${company ? ` for ${company}` : ""} and a specialist will get back to you within one business day.

          Service needed: ${service || "Not specified"}
          Your message: ${message || "—"}

          — The Relynt team
        `,
        sender: SENDER,
        to: [{ email, name }],
      }),
      brevo.transactionalEmails.sendTransacEmail({
        subject: `New lead: ${name} (${company || "no company"})`,
        htmlContent: `
          <h3>New contact form submission</h3>
          <table cellpadding="6" cellspacing="0" style="border-collapse:collapse">
            <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
            <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
            <tr><td><strong>Company</strong></td><td>${escapeHtml(company) || "—"}</td></tr>
            <tr><td><strong>Service</strong></td><td>${escapeHtml(service) || "Not sure yet"}</td></tr>
            <tr><td><strong>Message</strong></td><td>${escapeHtml(message).replace(/\n/g, "<br/>") || "—"}</td></tr>
          </table>
        `,
        textContent: `
          New contact form submission:
          Name: ${name}
          Email: ${email}
          Company: ${company || "—"}
          Service: ${service || "Not sure yet"}
          Message: ${message || "—"}
        `,
        sender: SENDER,
        to: [{ email: NOTIFY_EMAIL }],
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Brevo email send failed:", error);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}