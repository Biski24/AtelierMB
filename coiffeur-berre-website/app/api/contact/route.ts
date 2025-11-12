import { NextResponse } from 'next/server';

const CONTACT_FORWARD_EMAIL = process.env.CONTACT_FORWARD_EMAIL ?? 'contact@atelier-mb.fr';

export async function POST(request: Request) {
  const payload = await request.json();
  const requiredFields = ['name', 'email', 'message'];
  const missing = requiredFields.filter((field) => !payload[field]);

  if (missing.length) {
    return NextResponse.json(
      { message: `Merci de renseigner : ${missing.join(', ')}` },
      { status: 400 },
    );
  }

  await new Promise((resolve) => setTimeout(resolve, 300));
  console.info('New contact message', payload);

  return NextResponse.json({
    message: `Merci ${payload.name}, nous revenons vers vous par email (${CONTACT_FORWARD_EMAIL}) très vite.`,
  });
}
