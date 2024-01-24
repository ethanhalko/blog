import type {VercelRequest, VercelResponse} from '@vercel/node';
import Mailgun from 'mailgun.js';
import formData from 'form-data';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  if (request.method !== 'POST') {
    return response.status(404).json('Not found');
  }

  const mailgun = new Mailgun(formData);
  const mgClient = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || ''});
  const {name, email, subject, text} = request.body;

  try {
    await mgClient.messages.create(process.env.MAILGUN_DOMAIN || '', {
      from: `"${name}" <${email}>`,
      to: [process.env.CONTACT_ADDRESS || ''],
      subject,
      text,
    });
  } catch (err) {
    return response.status(500).json({error: err});
  }

  return response.status(200).json('Message sent successfully');
}
