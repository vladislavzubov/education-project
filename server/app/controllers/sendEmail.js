const nodemailer = require('nodemailer');

const sendEmail = async (body) => {
  const email = body.email;
  const bod = body.body;

  let testEmailAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: email,
      pass: '', // naturally, replace both with your real credentials or an application-specific password
    },
  });

  let result = await transporter.sendMail({
    from: '"Node js" <nodejs@example.com>',
    //   to: "user@example.com, user@example.com",
    to: email,
    subject: 'Message from Node js',
    //   text: "This message was sent from Node js server.",
    text: bod,
    html: bod,
  });
  return result;
};
module.exports = {
  sendEmail,
};
