import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Email to YOU
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: `📬 Portfolio Contact: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#09090B;color:#FAFAFA;margin:0;padding:20px;">
            <div style="max-width:560px;margin:0 auto;background:#111111;border-radius:16px;border:1px solid rgba(255,255,255,0.08);overflow:hidden;">
              <div style="background:linear-gradient(135deg,#3B82F6,#8B5CF6);padding:28px 32px;">
                <h1 style="margin:0;font-size:20px;font-weight:700;color:white;">New Portfolio Message</h1>
                <p style="margin:6px 0 0;font-size:13px;color:rgba(255,255,255,0.8);">Someone reached out via your portfolio</p>
              </div>
              <div style="padding:28px 32px;">
                <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:16px;margin-bottom:20px;">
                  <div style="margin-bottom:10px;">
                    <span style="font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#A1A1AA;font-weight:600;">From</span>
                    <p style="margin:4px 0 0;font-size:15px;font-weight:600;color:#FAFAFA;">${name}</p>
                  </div>
                  <div style="margin-bottom:10px;">
                    <span style="font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#A1A1AA;font-weight:600;">Email</span>
                    <p style="margin:4px 0 0;">
                      <a href="mailto:${email}" style="color:#3B82F6;text-decoration:none;font-size:14px;">${email}</a>
                    </p>
                  </div>
                  <div>
                    <span style="font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#A1A1AA;font-weight:600;">Subject</span>
                    <p style="margin:4px 0 0;font-size:14px;color:#FAFAFA;">${subject}</p>
                  </div>
                </div>
                <div>
                  <span style="font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#A1A1AA;font-weight:600;">Message</span>
                  <div style="margin-top:10px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-radius:10px;padding:16px;">
                    <p style="margin:0;font-size:14px;line-height:1.7;color:#D4D4D8;white-space:pre-wrap;">${message}</p>
                  </div>
                </div>
                <div style="margin-top:24px;">
                  <a href="mailto:${email}?subject=Re: ${subject}"
                     style="display:inline-block;background:linear-gradient(135deg,#3B82F6,#2563EB);color:white;text-decoration:none;padding:12px 24px;border-radius:10px;font-size:14px;font-weight:600;">
                    Reply to ${name} →
                  </a>
                </div>
              </div>
              <div style="padding:16px 32px;border-top:1px solid rgba(255,255,255,0.06);">
                <p style="margin:0;font-size:12px;color:#52525B;">Sent via your portfolio contact form</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // Confirmation email to SENDER
    await resend.emails.send({
      from: "Tayyab Zia <onboarding@resend.dev>",
      to: email,
      subject: `Got your message, ${name}! ✅`,
      html: `
        <!DOCTYPE html>
        <html>
          <body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#09090B;color:#FAFAFA;margin:0;padding:20px;">
            <div style="max-width:520px;margin:0 auto;background:#111111;border-radius:16px;border:1px solid rgba(255,255,255,0.08);overflow:hidden;">
              <div style="background:linear-gradient(135deg,#3B82F6,#8B5CF6);padding:28px 32px;">
                <h1 style="margin:0;font-size:20px;font-weight:700;color:white;">Message Received! 👋</h1>
                <p style="margin:6px 0 0;font-size:13px;color:rgba(255,255,255,0.8);">Thanks for reaching out, ${name}</p>
              </div>
              <div style="padding:28px 32px;">
                <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#D4D4D8;">
                  I've received your message and will get back to you within <strong style="color:#FAFAFA;">24 hours</strong>.
                </p>
                <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:16px;margin-bottom:20px;">
                  <p style="margin:0 0 6px;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#A1A1AA;font-weight:600;">Your message</p>
                  <p style="margin:0;font-size:13px;color:#A1A1AA;line-height:1.6;white-space:pre-wrap;">${message.slice(0, 200)}${message.length > 200 ? "..." : ""}</p>
                </div>
                <p style="margin:0;font-size:14px;color:#71717A;">
                  In the meantime, feel free to check out my
                  <a href="https://github.com/Hafiz-tayyab-23" style="color:#3B82F6;text-decoration:none;">GitHub</a>
                  or connect on
                  <a href="https://linkedin.com/in/hafiz-muhammad-tayyab-zia" style="color:#3B82F6;text-decoration:none;">LinkedIn</a>.
                </p>
              </div>
              <div style="padding:16px 32px;border-top:1px solid rgba(255,255,255,0.06);display:flex;justify-content:space-between;align-items:center;">
                <p style="margin:0;font-size:12px;color:#52525B;">Hafiz Muhammad Tayyab Zia</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}