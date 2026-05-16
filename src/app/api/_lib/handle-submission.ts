import { NextResponse } from 'next/server';
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

interface SubmissionOptions {
  formName: string;
  requiredFields?: string[];
}

/**
 * Generic form submission handler.
 * - Rejects honeypot ("company" filled).
 * - Validates required fields.
 * - Posts to FORM_WEBHOOK_URL if configured.
 * - Always logs (without sensitive data) to the server console.
 *
 * Forms are intentionally simple — they never collect PHI.
 */
export async function handleSubmission(
  request: Request,
  { formName, requiredFields = [] }: SubmissionOptions
) {
  let body: Record<string, string> = {};
  try {
    body = (await request.json()) as Record<string, string>;
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  // Honeypot check
  if (body.company && body.company.trim() !== '') {
    // Pretend success to avoid bot signaling
    return NextResponse.json({ ok: true });
  }

  for (const field of requiredFields) {
    if (!body[field] || String(body[field]).trim() === '') {
      return NextResponse.json(
        { ok: false, error: `Missing required field: ${field}` },
        { status: 400 }
      );
    }
  }

  const submission = {
    form: formName,
    receivedAt: new Date().toISOString(),
    ip: request.headers.get('x-forwarded-for') ?? 'unknown',
    userAgent: request.headers.get('user-agent') ?? 'unknown',
    payload: body,
  };

  // Forward to a webhook if configured
  const webhookUrl = process.env.FORM_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submission),
      });
    } catch (err) {
      console.error(`[${formName}] webhook delivery failed`, err);
    }
  } else {
    console.info(`[${formName}] received submission`, {
      receivedAt: submission.receivedAt,
      fields: Object.keys(body),
    });
  }
    try {
    await resend.emails.send({
      from: 'Baytown Open MRI <onboarding@resend.dev>',
      to: process.env.APPOINTMENT_EMAIL!,
      subject: `New ${formName} submission`,
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>First Name:</strong> ${body.firstName || ''}</p>
        <p><strong>Last Name:</strong> ${body.lastName || ''}</p>
        <p><strong>Phone:</strong> ${body.phone || ''}</p>
        <p><strong>Email:</strong> ${body.email || ''}</p>
      `,
    });
  } catch (err) {
    console.error('Email send failed', err);
  }

  return NextResponse.json({ ok: true });
}
