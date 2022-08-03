const mailer = require('nodemailer');
const smtp = require('nodemailer-smtp-transport');

async function mailjet() {
  const transport = mailer.createTransport(
    smtp({
      host: 'in-v3.mailjet.com',
      port: 2525,
      auth: {
        user: '33dd0ff2b34b87a3dff5ba37a210046f',
        pass: 'b883eaca5b1be6e061fe07e35a2705a3',
      },
    })
  );

  const json = await transport.sendMail({
    from: 'npjh123456789@gmail.com', // From address
    to: 'tyson.muvunyi6@gmail.com', // To address
    subject: 'Akagera Aviation - Registration Confirmation', // Subject
    html: "Hello<h3> user,</h3>\n\n<h4>This message is to confirm your registration.</h4>\n\n<img src='https://admin.jetandco.com/uploads/images/5e56e72c7717f278588739.png' height='200' width='300'> \n\n <h4>Akagera Aviation &copy; 2022</h4>", // Content
  });
  console.log(json);
}

mailjet();