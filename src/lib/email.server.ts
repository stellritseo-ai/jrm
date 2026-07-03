// email.server.ts — server-only. Never imported by client code.
// Sends notification emails via Resend REST API using Node.js built-in fetch.
// No npm package needed — uses the native fetch API.
// Set RESEND_API_KEY in your .env file (get a free key at https://resend.com).

import process from "node:process";

export interface EmailPayload {
  senderName: string;
  senderEmail: string;
  senderPhone?: string;
  service?: string;
  message: string;
  source: string; // e.g. "contact_page", "lets_talk_page", "landing_page"
}

export async function sendNotificationEmail(payload: EmailPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || apiKey.trim() === "") {
    console.warn("[Email] RESEND_API_KEY not set. Skipping email notification.");
    return;
  }

  const sourceLabels: Record<string, string> = {
    contact_page: "Contact Page",
    lets_talk_page: "Let's Talk Page",
    landing_page: "Landing Page",
    website_form: "Website Form"
  };
  const sourceLabel = sourceLabels[payload.source] || payload.source;

  const htmlBody = `<div style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;max-width:600px;margin:0 auto;background:#f9f8f5;">
      <div style="background:#1c140d;padding:28px 36px;">
        <h1 style="color:#a5b89d;margin:0;font-size:18px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">JRM Construction</h1>
        <p style="color:#8a7a6a;margin:4px 0 0;font-size:12px;">New Website Inquiry — ${sourceLabel}</p>
      </div>
      <div style="padding:32px 36px;background:#ffffff;border:1px solid #eae8e1;border-top:none;">
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #f0ede8;color:#9a9a9a;font-size:11px;font-weight:700;text-transform:uppercase;width:130px;">Name</td>
            <td style="padding:10px 0;border-bottom:1px solid #f0ede8;color:#1c140d;font-size:14px;font-weight:600;">${payload.senderName}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #f0ede8;color:#9a9a9a;font-size:11px;font-weight:700;text-transform:uppercase;">Email</td>
            <td style="padding:10px 0;border-bottom:1px solid #f0ede8;font-size:14px;"><a href="mailto:${payload.senderEmail}" style="color:#577a4c;">${payload.senderEmail}</a></td>
          </tr>
          ${payload.senderPhone ? `<tr><td style="padding:10px 0;border-bottom:1px solid #f0ede8;color:#9a9a9a;font-size:11px;font-weight:700;text-transform:uppercase;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #f0ede8;font-size:14px;"><a href="tel:${payload.senderPhone}" style="color:#577a4c;">${payload.senderPhone}</a></td></tr>` : ""}
          ${payload.service ? `<tr><td style="padding:10px 0;border-bottom:1px solid #f0ede8;color:#9a9a9a;font-size:11px;font-weight:700;text-transform:uppercase;">Service</td><td style="padding:10px 0;border-bottom:1px solid #f0ede8;color:#1c140d;font-size:14px;">${payload.service}</td></tr>` : ""}
        </table>
        <div style="margin-top:20px;">
          <p style="color:#9a9a9a;font-size:11px;font-weight:700;text-transform:uppercase;margin-bottom:8px;">Message</p>
          <div style="background:#f9f8f5;border:1px solid #eae8e1;border-radius:8px;padding:16px;color:#333;font-size:14px;line-height:1.7;">${payload.message.replace(/\n/g, "<br>")}</div>
        </div>
        <div style="margin-top:28px;padding-top:20px;border-top:1px solid #eae8e1;">
          <a href="mailto:${payload.senderEmail}" style="display:inline-block;background:#577a4c;color:#fff;text-decoration:none;padding:12px 24px;border-radius:8px;font-size:13px;font-weight:700;">Reply to ${payload.senderName}</a>
        </div>
      </div>
      <div style="padding:16px 36px;background:#f9f8f5;border:1px solid #eae8e1;border-top:none;text-align:center;">
        <p style="color:#bbb;font-size:10px;margin:0;">JRM Construction Landscaping Design · San Antonio, TX</p>
      </div>
    </div>`;

  const recipients = ["robert@jrmconstructionservicellc.com", "robertsa210@icloud.com"];

  for (const recipient of recipients) {
    try {
      console.log(`[Email] Attempting to send notification to ${recipient}...`);
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: "onboarding@resend.dev",
          to: [recipient],
          reply_to: payload.senderEmail,
          subject: `New Inquiry from ${payload.senderName} — ${sourceLabel}`,
          html: htmlBody
        })
      });

      if (!response.ok) {
        const errText = await response.text();
        console.error(`[Email] Resend API error for ${recipient} (status ${response.status}): ${errText}`);
      } else {
        const resData = await response.json();
        console.log(`[Email] Notification successfully sent to ${recipient}. Message ID: ${resData.id}`);
      }
    } catch (err) {
      console.error(`[Email] Fetch failed for recipient ${recipient}:`, err);
    }
  }
}
