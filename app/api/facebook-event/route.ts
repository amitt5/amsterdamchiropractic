import { NextRequest, NextResponse } from 'next/server';
import { sendMetaEvent } from '@/lib/meta-capi';

export async function POST(req: NextRequest) {
  let body: { eventName: string; eventId: string; sourceUrl: string; email?: string; phone?: string; firstName?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const { eventName, eventId, sourceUrl, email, phone, firstName } = body;

  if (!eventName || !eventId || !sourceUrl) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  sendMetaEvent({
    eventName,
    eventId,
    sourceUrl,
    userData: {
      email,
      phone,
      firstName,
      clientIp: req.headers.get('x-forwarded-for')?.split(',')[0].trim() || req.headers.get('x-real-ip') || '',
      userAgent: req.headers.get('user-agent') || '',
    },
  }).catch(console.error);

  return NextResponse.json({ ok: true });
}
