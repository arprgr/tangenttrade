var express = require('express');
var router = express.Router();
var models = require('../models/index');

/* add new users to the user table */
router.post('/', function(req, res) {

    console.log(req.body);
    
    models.Users.find({ attributes: ['emailid'],
        where: {
            emailid: req.body.custemail
        }
    }).then(function(Users) {
        if (!Users) {
            models.Users.create({
                emailid: req.body.custemail,
                name: req.body.name,
                password: req.body.password,
                customertype: req.body.type,
                contactno: req.body.contactno,
                organization: req.body.organization
            }).then(function (Users) {

                res.json(Users);
            });
        }
        else {
            console.log("user already registered");
            res.status(230).send({ error: "user already registered" });

        }
    })

});

module.exports = router;

  