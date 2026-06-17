const FROM_EMAIL = process.env.SUBSCRIBE_FROM_EMAIL || "notify@eastbaymattress.com";
const FROM_NAME = process.env.SUBSCRIBE_FROM_NAME || "East Bay Mattress";

const INTERNAL_RECIPIENTS = [
  process.env.SUBSCRIBE_NOTIFY_JASCHA,
  process.env.SUBSCRIBE_NOTIFY_ALEXANDRA,
]
  .map((email) => email.trim())
  .filter(Boolean);

type SubscriberNotification = {
  email: string;
  source?: string;
  page?: string;
  userAgent?: string;
  ip?: string | null;
};

type SendResult = {
  ok: boolean;
  provider?: string;
  reason?: string;
  status?: number;
};

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function notificationBody(input: SubscriberNotification) {
  const subscribedAt = new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const rows = [
    ["Email", input.email],
    ["Source", input.source || "newsletter"],
    ["Page", input.page || "unknown"],
    ["Time", `${subscribedAt} PT`],
    ["IP", input.ip || "unknown"],
    ["User agent", input.userAgent || "unknown"],
  ];

  const htmlRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px 10px;border-bottom:1px solid #eee;color:#666;font-size:12px;text-transform:uppercase;letter-spacing:.08em;font-weight:bold;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:8px 10px;border-bottom:1px solid #eee;color:#111;font-size:14px;vertical-align:top;">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join("");

  const html = `
    <div style="font-family:Inter,Helvetica,Arial,sans-serif;color:#111;max-width:560px;margin:0 auto;padding:24px;">
      <div style="font-size:11px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:#1d4ed8;margin-bottom:10px;">East Bay Mattress</div>
      <h1 style="font-size:22px;line-height:1.2;margin:0 0 12px;">New subscriber</h1>
      <p style="font-size:14px;line-height:1.5;color:#444;margin:0 0 18px;">Someone joined the East Bay Mattress / Evening Hours list.</p>
      <table style="width:100%;border-collapse:collapse;border:1px solid #eee;border-radius:10px;overflow:hidden;">
        ${htmlRows}
      </table>
    </div>`;

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  return { html, text };
}

async function sendWithResend(input: SubscriberNotification): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { ok: false, provider: "resend", reason: "missing-key" };

  const { html, text } = notificationBody(input);
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `${FROM_NAME} <${FROM_EMAIL}>`,
      to: INTERNAL_RECIPIENTS,
      subject: `New East Bay Mattress subscriber: ${input.email}`,
      html,
      text,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.warn("[subscribe] Resend failed", res.status, detail.slice(0, 300));
    return { ok: false, provider: "resend", reason: "send-failed", status: res.status };
  }

  return { ok: true, provider: "resend" };
}

async function sendWithMailerLite(input: SubscriberNotification): Promise<SendResult> {
  const apiKey = process.env.MAILERLITE_API_KEY;
  if (!apiKey) return { ok: false, provider: "mailerlite", reason: "missing-key" };

  const { html, text } = notificationBody(input);
  const res = await fetch("https://connect.mailerlite.com/api/email", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      to: INTERNAL_RECIPIENTS.map((email) => ({ email })),
      from: { email: FROM_EMAIL, name: FROM_NAME },
      subject: `New East Bay Mattress subscriber: ${input.email}`,
      html,
      text,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.warn("[subscribe] MailerLite failed", res.status, detail.slice(0, 300));
    return { ok: false, provider: "mailerlite", reason: "send-failed", status: res.status };
  }

  return { ok: true, provider: "mailerlite" };
}

export async function sendSubscriberNotification(input: SubscriberNotification): Promise<SendResult> {
  if (INTERNAL_RECIPIENTS.length === 0) {
    return { ok: false, reason: "no-recipients" };
  }

  const resend = await sendWithResend(input);
  if (resend.ok) return resend;

  const mailerlite = await sendWithMailerLite(input);
  if (mailerlite.ok) return mailerlite;

  if (process.env.NODE_ENV !== "production") {
    console.log("[subscribe] dev notification", { ...input, recipients: INTERNAL_RECIPIENTS.length });
    return { ok: true, provider: "dev-log" };
  }

  return {
    ok: false,
    reason: `all-providers-failed:${resend.reason || resend.status}:${mailerlite.reason || mailerlite.status}`,
  };
}
