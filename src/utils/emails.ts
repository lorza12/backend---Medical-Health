import sendGridMail from '@sendgrid/mail';

const SENDGRID_API_KEY =
  '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';

sendGridMail.setApiKey(SENDGRID_API_KEY as string);

/* export function sendMailSendGrid(data: sgMail.MailDataRequired) { */
/*   const apiKey = SENDGRID_API_KEY as string; */
/**/
/*   sgMail.setApiKey(apiKey); */
/**/
/*   return sgMail.send(data); */
/* } */

export async function sendEmail(data: sendGridMail.MailDataRequired) {
  try {
    await sendGridMail.send(data);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email');
    console.error(error);
  }
}

//   return sgMail.send(data);
// }