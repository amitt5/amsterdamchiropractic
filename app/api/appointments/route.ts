import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { sendMetaEvent } from '@/lib/meta-capi';

export async function POST(req: NextRequest) {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
  );
  const resend = new Resend(process.env.RESEND_API_KEY);
  let body: { date: string; time: string; name: string; email: string; phone: string; message?: string; marketing_consent?: boolean; event_id?: string; source_url?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const { date, time, name, email, phone, message, marketing_consent, event_id, source_url } = body;

  if (!date || !time || !name || !email || !phone) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  // Save to Supabase
  const { error: dbError } = await supabase.from('appointments').insert({
    date,
    time,
    name,
    email,
    phone,
    message: message || null,
    marketing_consent: marketing_consent ?? false,
  });

  if (dbError) {
    console.error('Supabase insert error:', dbError);
    return NextResponse.json({ error: 'Failed to save appointment' }, { status: 500 });
  }

  // Fire Meta CAPI Lead event (fire-and-forget, don't block response)
  sendMetaEvent({
    eventName: 'Lead',
    eventId: event_id || crypto.randomUUID(),
    sourceUrl: source_url || 'https://amsterdamchiropractic.com/nl',
    userData: {
      email,
      phone,
      firstName: name,
      clientIp: req.headers.get('x-forwarded-for')?.split(',')[0].trim() || req.headers.get('x-real-ip') || '',
      userAgent: req.headers.get('user-agent') || '',
    },
  }).catch(console.error);

  // Send notification email
  const notificationHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #191919;">
        <div style="background: #45321A; padding: 24px 32px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 20px; font-weight: 700;">New Appointment Request</h1>
          <p style="color: rgba(255,255,255,0.75); margin: 4px 0 0; font-size: 14px;">Health4Life Chiropractic</p>
        </div>
        <div style="background: #F6F6F6; padding: 32px; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td colspan="2" style="padding-bottom: 20px;">
                <div style="background: white; border-left: 4px solid #45321A; padding: 16px 20px; border-radius: 0 8px 8px 0;">
                  <p style="margin: 0 0 4px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #403F3F; font-weight: 600;">Date &amp; Time</p>
                  <p style="margin: 0; font-size: 22px; font-weight: 700; color: #45321A;">${date} at ${time}</p>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 12px 8px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #403F3F; white-space: nowrap; vertical-align: top;">Patient Name</td>
              <td style="padding: 8px 0; font-size: 15px; color: #191919; font-weight: 500;">${name}</td>
            </tr>
            <tr style="background: rgba(0,0,0,0.03); border-radius: 6px;">
              <td style="padding: 8px 12px 8px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #403F3F; white-space: nowrap; vertical-align: top;">Email</td>
              <td style="padding: 8px 0; font-size: 15px; color: #191919;"><a href="mailto:${email}" style="color: #45321A;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 12px 8px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #403F3F; white-space: nowrap; vertical-align: top;">Phone</td>
              <td style="padding: 8px 0; font-size: 15px; color: #191919;"><a href="tel:${phone}" style="color: #45321A;">${phone}</a></td>
            </tr>
            ${message ? `
            <tr style="background: rgba(0,0,0,0.03);">
              <td style="padding: 8px 12px 8px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #403F3F; white-space: nowrap; vertical-align: top;">Message</td>
              <td style="padding: 8px 0; font-size: 15px; color: #191919;">${message.replace(/\n/g, '<br>')}</td>
            </tr>
            ` : ''}
          </table>
          <p style="margin: 24px 0 0; font-size: 13px; color: #403F3F; border-top: 1px solid #e5e5e5; padding-top: 16px;">
            A confirmation email has been sent to the patient automatically.
          </p>
        </div>
      </div>
    `;

  const { error: emailError } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL!,
    to: [process.env.NOTIFY_EMAIL!, 'health4life@amsterdamchiropractic.com'],
    bcc: [process.env.BCC_EMAIL!],
    subject: `New Appointment Request — ${name} on ${date} at ${time}`,
    html: notificationHtml,
  });

  if (emailError) {
    console.error('Resend email error:', emailError);
    // Don't fail the request — data is already saved, email is secondary
  }

  // Send confirmation email to the patient
  const { error: confirmError } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL!,
    to: email,
    subject: `Appointment Request Received — Health4Life Chiropractic`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #191919;">
        <div style="background: #45321A; padding: 24px 32px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 20px; font-weight: 700;">Appointment Request Received</h1>
          <p style="color: rgba(255,255,255,0.75); margin: 4px 0 0; font-size: 14px;">Health4Life Chiropractic — Dr. M. Jahani DC</p>
        </div>
        <div style="background: #F6F6F6; padding: 32px; border-radius: 0 0 12px 12px;">

          <p style="margin: 0 0 8px; font-size: 16px; color: #191919; font-weight: 600;">Hi ${name},</p>
          <p style="margin: 0 0 28px; font-size: 15px; color: #403F3F; line-height: 1.6;">Thank you for your appointment request. We have received your details and will contact you shortly to confirm.</p>

          <div style="background: white; border-left: 4px solid #45321A; padding: 16px 20px; border-radius: 0 8px 8px 0; margin-bottom: 28px;">
            <p style="margin: 0 0 4px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #403F3F; font-weight: 700;">Requested Date &amp; Time</p>
            <p style="margin: 0; font-size: 24px; font-weight: 700; color: #45321A;">${date} at ${time}</p>
          </div>

          <!-- First visit block temporarily hidden
          <div style="background: white; border-left: 4px solid #45321A; padding: 16px 20px; border-radius: 0 8px 8px 0; margin-bottom: 28px;">
            <p style="margin: 0 0 6px; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #45321A;">First visit?</p>
            <p style="margin: 0 0 12px; font-size: 14px; color: #403F3F; line-height: 1.6;">If this is your first visit, please fill in your <strong>New Patient Intake Form</strong> online before you arrive — it only takes a few minutes and helps us prepare for your appointment.</p>
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}/patient-forms/new-patient-intake" style="display: inline-block; background: #45321A; color: white; text-decoration: none; font-size: 13px; font-weight: 600; padding: 8px 16px; border-radius: 6px;">Fill Out Intake Form</a>
          </div>
          -->

          <h2 style="margin: 0 0 12px; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #191919;">What to expect</h2>
          <ul style="margin: 0 0 28px; padding-left: 20px; font-size: 14px; color: #403F3F; line-height: 1.8;">
            <li>Plan to arrive <strong>5 minutes early</strong> so we can get you checked in.</li>
            <li>Your first visit includes a <strong>full intake &amp; assessment</strong> — bring any relevant medical records or scans if you have them.</li>
            <li>Wear comfortable clothing that allows easy movement.</li>
            <li>The session typically takes <strong>45–60 minutes</strong>.</li>
          </ul>

          <h2 style="margin: 0 0 12px; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #191919;">How to find us</h2>
          <div style="background: white; padding: 16px 20px; border-radius: 8px; margin-bottom: 28px;">
            <p style="margin: 0 0 4px; font-size: 15px; font-weight: 600; color: #191919;">Health4Life Chiropractic</p>
            <p style="margin: 0 0 12px; font-size: 14px; color: #403F3F;">Maasstraat 103, Amsterdam Zuid</p>
            <a href="https://maps.google.com/?q=Maasstraat+103,+Amsterdam" style="display: inline-block; background: #45321A; color: white; text-decoration: none; font-size: 13px; font-weight: 600; padding: 8px 16px; border-radius: 6px;">Open in Google Maps</a>
          </div>

          <h2 style="margin: 0 0 12px; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #191919;">Need to reschedule?</h2>
          <p style="margin: 0 0 28px; font-size: 14px; color: #403F3F; line-height: 1.6;">No problem — just give us a call or send a WhatsApp message at least <strong>24 hours in advance</strong> and we'll find another time that works for you.</p>

          <div style="border-top: 1px solid #e5e5e5; padding-top: 20px; font-size: 13px; color: #403F3F; line-height: 1.8;">
            <strong style="color: #191919;">Questions?</strong><br>
            Phone: <a href="tel:0206731800" style="color: #45321A;">020-673 1800</a><br>
            WhatsApp: <a href="https://wa.me/31618820000" style="color: #45321A;">06-1882-0000</a>
          </div>

        </div>
      </div>
    `,
  });

  if (confirmError) {
    console.error('Resend confirmation email error:', confirmError);
  }

  return NextResponse.json({ ok: true });
}
