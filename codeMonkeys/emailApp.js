var port = 4002;

var express = require('express');
var fs = require('fs');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var wellknown = require('nodemailer-wellknown');

var app = express();

var transporter = nodemailer.createTransport(smtpTransport({
	host: 'p3plcpnl0823.prod.phx3.secureserver.net',
	secure: true,
	debug: true,
	port: 465,
	auth: { 
		user: 'coders@miamicodemonkeys.com',
		pass: 'EllertonMoreno@305'
	}
}));

var mailOptions = {
    from: 'Code Monkeys <coders@miamicodemonkeys.com>', // sender address
    subject: 'Re: Web Design', // Subject line
};

app.get('/email1', function (req, res){

	var emailBody = fs.readFileSync("templates/email1.html", "utf-8");
	mailOptions.to = req.query.to;
	mailOptions.html = emailBody;
	transporter.sendMail(mailOptions, function(error, info){
		if(error){
		    console.log(error);
			res.end("something went wrong");
		}else{
		    console.log('Message sent: ' + info.response);
			res.end("sent your email to "+mailOptions.to+" message: "+emailBody);
		}
	});
});

app.listen(port);
console.log("server listening on port "+ port);
