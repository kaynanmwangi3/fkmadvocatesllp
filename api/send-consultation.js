import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).json({ success: true });
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  const toEmail = process.env.RESEND_TO_EMAIL || 'Office@fkmadvocatesllp.com';
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

  const { fullName, email, phone, legalIssue, message, time } = req.body || {};

  if (!process.env.RESEND_API_KEY) {
    console.error('Missing RESEND_API_KEY on server.');
    return res.status(500).json({ success: false, error: 'Server email configuration is missing.' });
  }

  if (!fullName || !email || !phone || !legalIssue) {
    return res.status(400).json({ success: false, error: 'Missing required form fields.' });
  }

  try {
    const subject = `New Legal Consultation: ${legalIssue}`;
    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
        <h2 style="margin-bottom: 8px;">New legal consultation request</h2>
        <p style="margin-top: 0; color: #4b5563;">A new consultation request was submitted from the website.</p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
        <p><strong>Full Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Legal Issue:</strong> ${escapeHtml(legalIssue)}</p>
        <p><strong>Submitted At:</strong> ${escapeHtml(time || new Date().toISOString())}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(message || '-')}</p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: `FKM Website <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject,
      html
    });

    if (error) {
      console.error('Resend API error:', error);
      return res.status(502).json({ success: false, error: 'Email provider returned an error.' });
    }

    return res.status(200).json({ success: true, id: data?.id || null });
  } catch (error) {
    console.error('Unexpected Resend server error:', error);
    return res.status(500).json({ success: false, error: 'Unable to send email at this time.' });
  }
}
