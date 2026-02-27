import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
  );
  const resend = new Resend(process.env.RESEND_API_KEY);
  let body: { date: string; time: string; name: string; email: string; phone: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const { date, time, name, email, phone, message } = body;

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
  });

  if (dbError) {
    console.error('Supabase insert error:', dbError);
    return NextResponse.json({ error: 'Failed to save appointment' }, { status: 500 });
  }

  // Send notification email
  const { error: emailError } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL!,
    to: process.env.NOTIFY_EMAIL!,
    subject: `New Appointment Request — ${name} on ${date} at ${time}`,
    html: `
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
            Please call or email the patient to confirm their appointment.
          </p>
        </div>
      </div>
    `,
  });

  if (emailError) {
    console.error('Resend email error:', emailError);
    // Don't fail the request — data is already saved, email is secondary
  }

  return NextResponse.json({ ok: true });
}
