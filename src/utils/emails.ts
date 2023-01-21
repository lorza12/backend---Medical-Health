import sendGridMail from '@sendgrid/mail';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY as string;

sendGridMail.setApiKey(SENDGRID_API_KEY);

export async function sendEmail(data: sendGridMail.MailDataRequired) {
  try {
    await sendGridMail.send(data);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email');
    console.error(error);
  }
}
