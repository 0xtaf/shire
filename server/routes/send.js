const express = require("express");
const router = express.Router();

const sgMail = require('@sendgrid/mail');

function routes(app) {
  router.post("/send", async (req, res) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    console.log(process.env.SENDGRID_API_KEY);
    const { senderName, email, message } = req.body;
    console.log(req.body);
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
      console.log('ERROR', error);
      console.log(error);
      res.status(400).send('Message not sent.');
    }
  });
  

  return router;
};

module.exports = routes;