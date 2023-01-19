import sendGridMail from '@sendgrid/mail';

sendGridMail.setApiKey(process.env.SENDGRID_API_KEY as string);

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