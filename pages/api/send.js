const sgMail = require('@sendgrid/mail');

export default async (req, res) => {
  const {method} = req;
  console.log(method)

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const { senderName, email, message } = req.body;
  const content = {
    to: 'tayfunsur@gmail.com',
    from: 'tayfunsur@gmail.com',
    subject: `New Message From - ${senderName} / ${email}`,
    text: message,
    html: `<p>${message}</p>`,
  };

  if (method === 'POST'){
    try {
      await sgMail.send(content);
      res.status(200).send('Message sent successfully.');
    } catch (error) {
      res.status(400).send('Message not sent.');
    }
  } else {
    res.status(400).send('This action is not allowed');
  }

};
