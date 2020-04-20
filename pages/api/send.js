const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  console.log(process.env.SENDGRID_API_KEY)
  const { name, email, message } = req.body
  console.log(req.body)
  const content = {
    to: 'tayfunsur@gmail.com',
    from: 'tayfunsur@gmail.com',
    subject: `New Message From - ${name} / ${email}`,
    text: message,
    html: `<p>${message}</p>`
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
}