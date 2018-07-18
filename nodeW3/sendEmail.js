//w3 Tutorial 

//enable less secure app https://www.google.com/settings/security/lesssecureapps
var nodemailer = require('nodemailer');

var textMessage = "How was AWS?";

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'the101bytes@gmail.com',
    pass: '******'
  }
});

var mailOptions = {
  from: 'the101bytes@gmail.com',
  to: 'hectorliangchan@gmail.com',
  subject: 'AWS - Sending Email using - Node.js',
  text: textMessage
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
    console.log("Message: " + textMessage);
  }
});