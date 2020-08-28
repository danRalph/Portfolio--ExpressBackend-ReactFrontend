var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const creds = require('../config/config');

var transport = {
    host: 'smtp-mail.outlook.com',
    secure: false,
    port: 25,
    auth: {
        user: creds.USER,
        pass: creds.PASS
    },
    tls: {
        rejectUnauthorized: false
    }
}

var transporter = nodemailer.createTransport(transport)


transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('server is ready to take messages');
    }
});

router.post('/send', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n message: ${message}`

    var mail = {
        from: name,
        to: 'dan.r.richards@hotmail.co.uk',
        subject: 'New message from Contact Form',
        text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                msg: 'fail'
            })
        } else {
            res.json({
                msg: 'success'
            })
        }
    })
})

module.exports = router;