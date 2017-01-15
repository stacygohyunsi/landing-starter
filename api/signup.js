var express = require("express");
var Mailgun = require('mailgun-js');

var exports = {};
var router = express.Router();
exports.router = router;

router.post('/send', function(req, res, next){
	//sign up for an account on mail gun and fill in the api keys and domain accordingly.
	var mailgun = new Mailgun({apiKey: 'xxxxx', domain: 'xxxx.mailgun.org'});

	var data = {
		//enter the email you want the response to be sent to.
		from: "XXX@gmail.com",
		to: "XXX@gmail.com",
		subject: 'Mail from Landing Page',
		html: "name: "+ req.body.name + ", " + "email: " + req.body.email + ", phone: " + req.body.tel, 
	}

	mailgun.messages().send(data, function (err, body) {
			if (err) {
				res.send("got an error: ", err);
			}
			else {
				res.send("done");
			}
	});
})

module.exports = router;

