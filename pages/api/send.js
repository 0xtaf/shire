const sgMail = require('@sendgrid/mail');

export default async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const { senderName, email, message } = req.body;
  const content = {
    to: 'tayfunsur@gmail.com',
    from: 'tayfunsur@gmail.com',
    subject: `New Message From - ${senderName} / ${email}`,
    text: message,
    html: `<p>${message}</p>`,
  };

  try {
    await sgMail.send(content);
    res.status(200).send('Message sent successfully.');
  } catch (error) {
    res.status(400).send('Message not sent.');
  }
};
