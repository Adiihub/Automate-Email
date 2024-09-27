const nodemailer = require("nodemailer");
let express = require('express');
let app = express();

const transporter = nodemailer.createTransport({
    service:'gmail',
  host: "smtp.email.in",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "aditi.2201301003@geetauniversity.edu.in",
    pass: "remg qvig jufn novd",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'aditi.2201301003@geetauniversity.edu.in', // sender address
    // to: "shubham.gth@geetauniversity.edu.in", // list of receivers
    to: "2301301063.anukriti@geetauniversity.edu.in",
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b style='background-color:red padding-2px margin-4px'>Hii! How are you?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);

app.get('/')
