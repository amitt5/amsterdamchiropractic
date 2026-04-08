import { createHash } from 'crypto';

function sha256(value: string): string {
  return createHash('sha256').update(value.toLowerCase().trim()).digest('hex');
}

function hashPhone(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  // Normalize Dutch numbers: 06... → 316...
  const normalized = digits.startsWith('0') ? '31' + digits.slice(1) : digits;
  return createHash('sha256').update(normalized).digest('hex');
}

interface MetaEvent {
  eventName: string;
  eventId: string;
  sourceUrl: string;
  userData: {
    email?: string;
    phone?: string;
    firstName?: string;
    clientIp?: string;
    userAgent?: string;
    fbp?: string;
    fbc?: string;
  };
}

export async function sendMetaEvent(event: MetaEvent): Promise<void> {
  const pixelId = process.env.META_PIXEL_ID;
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;

  if (!pixelId || !accessToken) return;

  const userData: Record<string, string> = {};
  if (event.userData.email) userData.em = sha256(event.userData.email);
  if (event.userData.phone) userData.ph = hashPhone(event.userData.phone);
  if (event.userData.firstName) userData.fn = sha256(event.userData.firstName.split(' ')[0]);
  if (event.userData.clientIp) userData.client_ip_address = event.userData.clientIp;
  if (event.userData.userAgent) userData.client_user_agent = event.userData.userAgent;
  if (event.userData.fbp) userData.fbp = event.userData.fbp;
  if (event.userData.fbc) userData.fbc = event.userData.fbc;

  const payload = {
    data: [
      {
        event_name: event.eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: event.eventId,
        event_source_url: event.sourceUrl,
        action_source: 'website',
        user_data: userData,
      },
    ],
  };

  try {
    const res = await fetch(
      `https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );
    if (!res.ok) {
      console.error('Meta CAPI error:', await res.text());
    }
  } catch (err) {
    console.error('Meta CAPI fetch error:', err);
  }
}
