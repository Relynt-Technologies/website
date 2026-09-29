import { readFile } from "fs/promises";
import { join } from "path";
import { NextResponse } from "next/server";
import { BrevoClient } from "@getbrevo/brevo";

const brevo = new BrevoClient({
  apiKey: process.env.BREVO_API_KEY || "",
});

const SENDER = {
  name: "Relynt",
  email: process.env.BREVO_SENDER_EMAIL || "no-reply@relyntai.com",
};

const NOTIFY_EMAILS = ["hello@relyntai.com", "support@relyntai.com"];

const LOGO_FILENAME = "relynt_logo_for_dark_bg.png";
const LOGO_CID = `cid:${LOGO_FILENAME}`;
// 1918x615 source, rendered at the same 40px height the site header uses.
const LOGO_WIDTH = 125;
const LOGO_HEIGHT = 40;

let logoBase64: Promise<string | null> | null = null;

// Embedded as an inline CID image rather than a remote URL so the logo still
// renders in clients that block external images (Gmail, Outlook by default).
function getLogoBase64() {
  if (!logoBase64) {
    logoBase64 = readFile(join(process.cwd(), "public", "logo", LOGO_FILENAME))
      .then((buffer) => buffer.toString("base64"))
      .catch((error) => {
        console.error("Failed to load email logo:", error);
        return null;
      });
  }
  return logoBase64;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();
  const company = String(body.company || "").trim();
  const service = String(body.service || "").trim();
  const message = String(body.message || "").trim();

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 }
    );
  }

  const logo = await getLogoBase64();
  const logoSrc = logo ? LOGO_CID : null;
  const logoAttachment = logo
    ? [{ name: LOGO_FILENAME, content: logo }]
    : undefined;

  try {
    await Promise.all([
      brevo.transactionalEmails.sendTransacEmail({
        subject: "Thanks for reaching out to Relynt",
        attachment: logoAttachment,
        htmlContent: renderBrandEmail({
          title: "Thanks for reaching out",
          logoSrc,
          contentHtml: `
            <p style="color:#0f172a;font-size:16px;margin:0 0 16px;">Hi ${escapeHtml(name)},</p>
            <p style="color:#475569;font-size:15px;line-height:1.6;margin:0 0 24px;">
              Thanks for contacting Relynt. We've received your inquiry${company ? ` for <strong>${escapeHtml(company)}</strong>` : ""} and a specialist will reach out within one business day.
            </p>
            <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:16px;margin:0 0 28px;">
              <p style="color:#166534;font-size:13px;margin:0;font-weight:500;">
                ✓ A specialist will review your requirements<br>
                ✓ We'll confirm scope and turnaround time<br>
                ✓ You'll hear from us within one business day
              </p>
            </div>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td align="center">
                  <a href="${BASE_URL}/services" style="display:inline-block;background:#063840;color:#ffffff;text-decoration:none;padding:14px 36px;border-radius:8px;font-weight:600;font-size:15px;letter-spacing:0.3px;">
                    Explore Our Services →
                  </a>
                </td>
              </tr>
            </table>
          `,
        }),
        textContent: `
          Hi ${name},

          Thanks for contacting Relynt. We've received your inquiry${company ? ` for ${company}` : ""} and a specialist will reach out within one business day.

          Service needed: ${service || "Not specified"}
          Phone: ${phone || "—"}
          Your message: ${message || "—"}

          — The Relynt team
        `,
        sender: SENDER,
        to: [{ email, name }],
      }),
      brevo.transactionalEmails.sendTransacEmail({
        subject: `New lead: ${name} (${company || "no company"})`,
        attachment: logoAttachment,
        htmlContent: renderBrandEmail({
          title: "New contact form submission",
          logoSrc,
          contentHtml: `
            <p style="color:#0f172a;font-size:16px;margin:0 0 16px;">Hi Relynt team,</p>
            <p style="color:#475569;font-size:15px;line-height:1.6;margin:0 0 24px;">
              A new inquiry just came in through the contact form.
            </p>
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;margin:0 0 28px;">
              <tr>
                <td style="background:#f8fafc;padding:10px 16px;font-weight:600;font-size:13px;color:#475569;border-bottom:1px solid #e2e8f0;">Name</td>
                <td style="padding:10px 16px;font-size:14px;color:#0f172a;border-bottom:1px solid #e2e8f0;">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="background:#f8fafc;padding:10px 16px;font-weight:600;font-size:13px;color:#475569;border-bottom:1px solid #e2e8f0;">Email</td>
                <td style="padding:10px 16px;font-size:14px;color:#0f172a;border-bottom:1px solid #e2e8f0;">${escapeHtml(email)}</td>
              </tr>
              <tr>
                <td style="background:#f8fafc;padding:10px 16px;font-weight:600;font-size:13px;color:#475569;border-bottom:1px solid #e2e8f0;">Company</td>
                <td style="padding:10px 16px;font-size:14px;color:#0f172a;border-bottom:1px solid #e2e8f0;">${escapeHtml(company) || "—"}</td>
              </tr>
              <tr>
                <td style="background:#f8fafc;padding:10px 16px;font-weight:600;font-size:13px;color:#475569;border-bottom:1px solid #e2e8f0;">Phone</td>
                <td style="padding:10px 16px;font-size:14px;color:#0f172a;border-bottom:1px solid #e2e8f0;">${escapeHtml(phone) || "—"}</td>
              </tr>
              <tr>
                <td style="background:#f8fafc;padding:10px 16px;font-weight:600;font-size:13px;color:#475569;border-bottom:1px solid #e2e8f0;">Service</td>
                <td style="padding:10px 16px;font-size:14px;color:#0f172a;border-bottom:1px solid #e2e8f0;">${escapeHtml(service) || "Not sure yet"}</td>
              </tr>
              <tr>
                <td style="background:#f8fafc;padding:10px 16px;font-weight:600;font-size:13px;color:#475569;">Message</td>
                <td style="padding:10px 16px;font-size:14px;color:#0f172a;">${escapeHtml(message).replace(/\n/g, "<br/>") || "—"}</td>
              </tr>
            </table>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td align="center">
                  <a href="mailto:${escapeHtml(email)}" style="display:inline-block;background:#063840;color:#ffffff;text-decoration:none;padding:14px 36px;border-radius:8px;font-weight:600;font-size:15px;letter-spacing:0.3px;">
                    Reply to ${escapeHtml(name)} →
                  </a>
                </td>
              </tr>
            </table>
            <p style="color:#94a3b8;font-size:12px;margin:24px 0 0;text-align:center;">
              Lead email: <span style="color:#063840;">${escapeHtml(email)}</span>
            </p>
          `,
        }),
        textContent: `
          New contact form submission:
          Name: ${name}
          Email: ${email}
          Phone: ${phone || "—"}
          Company: ${company || "—"}
          Service: ${service || "Not sure yet"}
          Message: ${message || "—"}
        `,
        sender: SENDER,
        to: NOTIFY_EMAILS.map((address) => ({ email: address })),
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

const BASE_URL = "https://relyntai.com";

function renderBrandEmail(opts: {
  title: string;
  contentHtml: string;
  logoSrc: string | null;
}) {
  const logo = opts.logoSrc
    ? `<img src="${opts.logoSrc}" alt="Relynt" width="${LOGO_WIDTH}" height="${LOGO_HEIGHT}" style="display:block;border:0;width:${LOGO_WIDTH}px;height:${LOGO_HEIGHT}px;">`
    : "";

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${opts.title} - relynt</title>
</head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:Inter,system-ui,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,0.07);">
          <tr>
            <td style="background:#063840;padding:32px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td style="padding:0;">
                    ${logo}
                  </td>
                </tr>
                <tr>
                  <td style="padding:${logo ? "20px" : "0"} 0 0 0;">
                    <div style="color:#ffffff;font-size:22px;font-weight:700;line-height:1.3;">${opts.title}</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:40px;">
              ${opts.contentHtml}
            </td>
          </tr>
          <tr>
            <td style="background:#f8fafc;padding:20px 40px;border-top:1px solid #e2e8f0;">
              <p style="color:#94a3b8;font-size:12px;margin:0;text-align:center;">
                Powered by <strong style="color:#063840;">relynt</strong> · Secure Background Verification
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}