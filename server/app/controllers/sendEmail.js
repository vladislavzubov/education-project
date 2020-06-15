const nodemailer = require('nodemailer');

const sendEmail = async (body) => {
  const email = body.email;
  const bod = body.body;
  console.log(body.email);

  let testEmailAccount = await nodemailer.createTestAccount();
  console.log('tttttttttttttttttttttttttt', email);

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'alevitsky.exceedteam@gmail.com',
      pass: 'restart987', // naturally, replace both with your real credentials or an application-specific password
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
