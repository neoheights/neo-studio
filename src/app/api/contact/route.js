import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, city, phone, whatsapp, pageUrl } = body || {};

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
    const excelSheetUrl = process.env.EXCEL_SHEET;

    // Send to Excel Sheet if configured
    if (excelSheetUrl) {
      try {
        await fetch(excelSheetUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            city,
            phone,
            whatsapp: whatsapp ? 'Yes' : 'No',
            pageUrl,
            date: new Date().toLocaleDateString('en-IN'),
            time: new Date().toLocaleTimeString('en-IN')
          }),
        });
      } catch (excelErr) {
        console.error('Failed to send lead to Excel:', excelErr);
      }
    }

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
  <div style="font-family: Arial, sans-serif; color: #ffffff; background:#0b0f1a; padding:20px;">
    
    <div style="max-width:600px;">
      
      <p style="margin:6px 0;"><strong>Name:</strong> ${name}</p>
      <p style="margin:6px 0;"><strong>City:</strong> ${city}</p>
      <p style="margin:6px 0;"><strong>Phone:</strong> ${phone || '-'}</p>
      <p style="margin:6px 0;"><strong>Whatsapp updates:</strong><br/>${whatsapp ? 'Required' : 'Not required'}</p>

      <p style="margin:18px 0;">---</p>

      <p style="margin:6px 0;">
        <strong>Date:</strong> ${new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })}
      </p>

      <p style="margin:6px 0;">
        <strong>Time:</strong> ${new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    })}
      </p>

      <p style="margin:6px 0;">
        <strong>Page URL:</strong>
        <a href="${pageUrl}" style="color:#4da3ff; text-decoration:none;">
          ${pageUrl}
        </a>
      </p>

    </div>
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

