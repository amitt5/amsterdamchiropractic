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
  let body: { date: string; time: string; name: string; email: string; phone: string; message?: string; marketing_consent?: boolean; event_id?: string; source_url?: string; locale?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const { date, time, name, email, phone, message, marketing_consent, event_id, source_url, locale } = body;
  const lang: 'en' | 'nl' = locale === 'nl' ? 'nl' : 'en';

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

  // Send confirmation email to the patient (bilingual)
  const patientCopy = {
    en: {
      subject: 'Appointment request received – not yet confirmed',
      header: 'Appointment Request Received',
      hi: `Hi ${name},`,
      intro: 'Thank you for your request. <strong>Your appointment is not confirmed yet.</strong> We will send you a confirmation as soon as possible.',
      requestedLabel: 'Requested date &amp; time (awaiting confirmation)',
      at: 'at',
      wait: '<strong>Please wait for our confirmation before coming to the clinic.</strong> If this time is not available, we will suggest another one.',
      fasterTitle: 'Want a faster confirmation?',
      fasterText: "Send us a WhatsApp message at 06-1882-0000 and we'll confirm your appointment sooner.",
      fasterBtn: 'Send WhatsApp message',
      notHeard: "Haven't heard from us? Call us on <a href=\"tel:0206731800\" style=\"color: #45321A;\">020-673 1800</a>.",
      onceConfirmed: 'Once your appointment is confirmed',
      tips: [
        'Plan to arrive <strong>5 minutes early</strong> so we can check you in.',
        'Your first visit includes a <strong>full intake &amp; assessment</strong>. Bring any relevant medical records or scans if you have them.',
        'Wear comfortable clothing that allows easy movement.',
        'The session typically takes <strong>45–60 minutes</strong>.',
      ],
      findUs: 'How to find us',
      maps: 'Open in Google Maps',
      reschedTitle: 'Need to reschedule?',
      reschedText: "Just call or WhatsApp us at least <strong>24 hours in advance</strong> and we'll find another time that works for you.",
      questions: 'Questions?',
      phone: 'Phone',
    },
    nl: {
      subject: 'Afspraakaanvraag ontvangen – nog niet bevestigd',
      header: 'Afspraakaanvraag ontvangen',
      hi: `Beste ${name},`,
      intro: 'Bedankt voor uw aanvraag. <strong>Uw afspraak is nog niet bevestigd.</strong> Wij sturen u zo snel mogelijk een bevestiging.',
      requestedLabel: 'Aangevraagde datum &amp; tijd (wacht op bevestiging)',
      at: 'om',
      wait: '<strong>Wacht alstublieft op onze bevestiging voordat u naar de kliniek komt.</strong> Als deze tijd niet beschikbaar is, stellen wij een andere tijd voor.',
      fasterTitle: 'Snellere bevestiging?',
      fasterText: 'Stuur ons een WhatsApp-bericht op 06-1882-0000, dan bevestigen wij uw afspraak sneller.',
      fasterBtn: 'WhatsApp-bericht sturen',
      notHeard: 'Niets van ons gehoord? Bel ons op <a href=\"tel:0206731800\" style=\"color: #45321A;\">020-673 1800</a>.',
      onceConfirmed: 'Zodra uw afspraak is bevestigd',
      tips: [
        'Kom <strong>5 minuten eerder</strong> zodat wij u kunnen inchecken.',
        'Uw eerste bezoek bestaat uit een <strong>volledige intake &amp; onderzoek</strong>. Neem relevante medische gegevens of scans mee als u die heeft.',
        'Draag comfortabele kleding waarin u makkelijk kunt bewegen.',
        'De sessie duurt meestal <strong>45–60 minuten</strong>.',
      ],
      findUs: 'Hoe vindt u ons',
      maps: 'Open in Google Maps',
      reschedTitle: 'Afspraak verzetten?',
      reschedText: 'Bel of WhatsApp ons minimaal <strong>24 uur van tevoren</strong>, dan zoeken wij samen een ander moment.',
      questions: 'Vragen?',
      phone: 'Telefoon',
    },
  }[lang];

  const { error: confirmError } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL!,
    to: email,
    subject: `${patientCopy.subject} — Health4Life Chiropractic`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #191919;">
        <div style="background: #45321A; padding: 24px 32px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 20px; font-weight: 700;">${patientCopy.header}</h1>
          <p style="color: rgba(255,255,255,0.75); margin: 4px 0 0; font-size: 14px;">Health4Life Chiropractic — Dr. M. Jahani DC</p>
        </div>
        <div style="background: #F6F6F6; padding: 32px; border-radius: 0 0 12px 12px;">

          <p style="margin: 0 0 8px; font-size: 16px; color: #191919; font-weight: 600;">${patientCopy.hi}</p>
          <p style="margin: 0 0 24px; font-size: 15px; color: #403F3F; line-height: 1.6;">${patientCopy.intro}</p>

          <div style="background: #FFF7E6; border-left: 4px solid #D97706; padding: 16px 20px; border-radius: 0 8px 8px 0; margin-bottom: 24px;">
            <p style="margin: 0 0 4px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #92400E; font-weight: 700;">${patientCopy.requestedLabel}</p>
            <p style="margin: 0; font-size: 24px; font-weight: 700; color: #45321A;">${date} ${patientCopy.at} ${time}</p>
          </div>

          <p style="margin: 0 0 24px; font-size: 15px; color: #191919; line-height: 1.6;">${patientCopy.wait}</p>

          <div style="background: white; border-left: 4px solid #25D366; padding: 16px 20px; border-radius: 0 8px 8px 0; margin-bottom: 16px;">
            <p style="margin: 0 0 6px; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #45321A;">${patientCopy.fasterTitle}</p>
            <p style="margin: 0 0 12px; font-size: 14px; color: #403F3F; line-height: 1.6;">${patientCopy.fasterText}</p>
            <a href="https://wa.me/31618820000" style="display: inline-block; background: #25D366; color: white; text-decoration: none; font-size: 13px; font-weight: 600; padding: 8px 16px; border-radius: 6px;">${patientCopy.fasterBtn}</a>
          </div>

          <p style="margin: 0 0 32px; font-size: 14px; color: #403F3F; line-height: 1.6;">${patientCopy.notHeard}</p>

          <h2 style="margin: 0 0 12px; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #191919;">${patientCopy.onceConfirmed}</h2>
          <ul style="margin: 0 0 28px; padding-left: 20px; font-size: 14px; color: #403F3F; line-height: 1.8;">
            ${patientCopy.tips.map((t) => `<li>${t}</li>`).join('\n            ')}
          </ul>

          <h2 style="margin: 0 0 12px; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #191919;">${patientCopy.findUs}</h2>
          <div style="background: white; padding: 16px 20px; border-radius: 8px; margin-bottom: 28px;">
            <p style="margin: 0 0 4px; font-size: 15px; font-weight: 600; color: #191919;">Health4Life Chiropractic</p>
            <p style="margin: 0 0 12px; font-size: 14px; color: #403F3F;">Maasstraat 103, Amsterdam Zuid</p>
            <a href="https://maps.google.com/?q=Maasstraat+103,+Amsterdam" style="display: inline-block; background: #45321A; color: white; text-decoration: none; font-size: 13px; font-weight: 600; padding: 8px 16px; border-radius: 6px;">${patientCopy.maps}</a>
          </div>

          <h2 style="margin: 0 0 12px; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #191919;">${patientCopy.reschedTitle}</h2>
          <p style="margin: 0 0 28px; font-size: 14px; color: #403F3F; line-height: 1.6;">${patientCopy.reschedText}</p>

          <div style="border-top: 1px solid #e5e5e5; padding-top: 20px; font-size: 13px; color: #403F3F; line-height: 1.8;">
            <strong style="color: #191919;">${patientCopy.questions}</strong><br>
            ${patientCopy.phone}: <a href="tel:0206731800" style="color: #45321A;">020-673 1800</a><br>
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
