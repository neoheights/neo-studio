import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, city, phone, whatsapp } = body || {};

    if (!name || !city) {
      return NextResponse.json(
        { ok: false, error: 'Missing required fields: name, city' },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const secure = String(process.env.SMTP_SECURE || '').toLowerCase() === 'true' || port === 465;
    const to = process.env.SMTP_TO || user;

    const fromUser = process.env.SMTP_FROM || 'info@neoheights.com'

    if (!host || !user || !pass) {
      return NextResponse.json(
        { ok: false, error: 'SMTP environment variables not configured' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const subject = `New Contact Enquiry: ${name}`;
    const text = `Name: ${name}
Phone: ${phone || '-'}
`;
    const html = `
      <div style="font-family: Arial, sans-serif; color: #111;">
        <h2 style="margin:0 0 12px;">New Contact Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Phone:</strong> ${phone || '-'}</p>
        <p style="white-space:pre-line;"><strong>Whatsapp updates:</strong><br/>${whatsapp ? 'Required' : 'Not required' }</p>
      </div>
    `;

    const sendResponse = await transporter.sendMail({
      from: `"Neo Heights Website" <${fromUser}>`,
      to,
    //   replyTo: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true, sendResponse });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: 'Failed to send email', details: String(err?.message || err) },
      { status: 500 }
    );
  }
}

