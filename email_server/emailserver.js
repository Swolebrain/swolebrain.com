
var port = 4001;
var express = require('express');
var nodemailer = require('nodemailer');
var app = express();
var https = require('https');
var fs = require('fs');
/*
Here we are configuring our SMTP Server details.
STMP is mail server which is responsible for sending and recieving email.
*/
var hskey = fs.readFileSync('anonemailer-key.pem');
var hscert = fs.readFileSync('anonemailer-cert.pem');
var options = { key: hskey, cert : hscert };

console.log("Attempting to create SMTP transport...");
var smtpTransport = nodemailer.createTransport( {
    service: "Gmail",
    auth: {
        user: "maileraccount@columbushs.com",
        pass: "thuglifethuglife"
		}
	});
console.log("SMTP transport successfully created.");
/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/

var allowCrossDomain = function(req, res, next) {
     res.header('Access-Control-Allow-Origin', '*');
     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
     res.header('Access-Control-Allow-Headers', 'Content-Type');

     next();
 }
app.use(allowCrossDomain);

app.get('/', function(req, res){
	res.send("this test was ok");
});

app.post('/send', function(req, res) {
	console.log("received send request: "+req.query.subject);
    var mailOptions = {
		from: 'standforthesilent@swolebrain.com',
        to: 'standforthesilent@columbushs.com',
        subject: 'Stand for the Silent: '+req.query.subject,
        text: req.query.text
    };
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response) {
        if (error) {
            console.log(error);
            res.end("error");
        } else {
            console.log("Message sent: " + response.message);
            res.end("sent");
        }
    });
});

/*app.listen(port, function(){
	console.log("anon emailer listening on port "+port);
});*/
https.createServer(options, app).listen(port);
console.log("Listening on port "+port);
