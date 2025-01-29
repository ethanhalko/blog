import type {VercelRequest, VercelResponse} from '@vercel/node';
import sgMail from '@sendgrid/mail';

export async function POST(request: VercelRequest, response: VercelResponse) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

  const {name, email, subject, text} = request.body;

  try {
    await sgMail.send({
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
