import sgMail from '@sendgrid/mail';

export function sendMailSendGrid(data: sgMail.MailDataRequired) {
  const apiKey = process.env.SENDGRIP_API_KEY as string;

  sgMail.setApiKey(apiKey);

  return sgMail.send(data);
}
