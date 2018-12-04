var port = 4003;

var express = require('express');
var fs = require('fs');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var wellknown = require('nodemailer-wellknown');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'fvm.productions04@gmail.com',
        pass: '3900Java' 
    }
});


var mailOptions = {
    from: 'Contact from your Website <noreply@gmail.com>',
    subject: 'Re: Your website'
};

app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
	next();
});

app.post('/email', function (req, res) {
    for (var i in req){
		console.log(i+": "+req[i]);
	}
    var emailBody = "New email from: " + req.body.full_name;
    emailBody += "<br>Phone: " + req.body.phone + "<br>Date: "+req.body.ddate+"<br>Time: "+req.body.hora+"<br>Email: "+req.body.email+
    "<br>Message: "+req.body.message;
    
    if (req.body.subject){
		mailOptions.subject = req.body.subject;
	}

    mailOptions.to = req.body.dest_email;
    
    mailOptions.html= emailBody;
    transporter.sendMail(mailOptions, function(error,info){
        if (error) {
            console.log(error);
            res.end("Something went wrong");
        }else {
            console.log('Message sent '+ info.response);
            res.end("Email sent to: "+mailOptions.to);
        }
    });
});

app.post("/email-cv", function(req,res){
    /*
        HERE IS WHERE I NEED TO PUT CODE TO INSERT STUDENT-GENERATED HTML
    */
    var emailBody = fs.readFileSync(req.body.resume_path);
    
    emailBody = req.body.message + emailBody;
    var mailOptions = {
        from: req.body.from,
        to: req.body.to,
        html: emailBody,
        subject: req.body.subject
    };
    var transporter2 = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user:'fvi.coder@gmail.com',
            pass:'1234qwer...' 
        }
    });
    transporter2.sendMail(mailOptions, function(error,info){
        if (error) {
            console.log(error);
            res.end("Something went wrong. Error:\n"+error);
        }else{
            console.log('Message sent '+ info.response);
            res.end("Email sent to: "+mailOptions.to+". Response:\n"+info.response);
        }
    });
});

app.get('/email', function(req,res){
    res.end("post the contact form to the /email URL in order to have "+"it forwarded to the email in the dest_email form field."+
    "\nVariable names are full_name, phone, ddate, hora, email, message, subject, and the dest_email hidden input.");
});

app.get("/email-cv", function(req,res){
    res.end("These are the fields your form needs to post:\nfrom\nto\nmessage\nsubject\nresume_path\n\nThese can be hidden inputs to your form. The 'message' is what you want to go above your html resume.\n\n\nThe action url is http://www.swolebrain.com:4003/email-cv\n\nThe form method is POST");
});

app.listen(port);
console.log("server listening on port "+ port);
