var express = require('express');
var router = express.Router();
var models = require('../models/index');

/* add new users to the user table */
router.post('/', function(req, res) {
    
    
    console.log('adding buyer enq');
    
    console.log(req);
    console.log(req.body.email);
    console.log(req.body.name);
    console.log(req.body.Organization);
    console.log(req.body.contactwhen);
    
    
     models.BuyerEnquiry.create({
                emailid: req.body.email,
                name: req.body.name,
                organization: req.body.Organization,
                customertype: 'buyer',
                designation: req.body.Designation,
                contactyn: req.body.contactyn,
                tonnagepermonth : req.body.tonnagepermonth,
                currentprocess: req.body.CurrentProcess,
                buyingtime: req.body.buyingtime,
                contactyn: req.body.contactyn,
                contactwhen: req.body.contactwhen
            }).then(function (BuyerEnquiry) {

                res.json(BuyerEnquiry);
            });
       

});

module.exports = router;

  