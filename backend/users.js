var mongoose = require("mongoose");
var User = require("./models").user;
var Service = require("./models").service;
var express = require("express");
var router = express.Router();

//TODO add nfc id
router.post("/", function(req,res){
    var user = new User();
    user.nfcID = req.body.nfcID;
    user.name = req.body.name;
    console.log(req.body.services);
    req.body.services.forEach(function(service) {
        user.services.push(mongoose.Types.ObjectId(service))
    })
    user.save(function(err){
        if(err){
            res.status(500).send("DB Error")
        }
        res.status(200).send("successfully saved")
    })
})

router.get("/:nfcID",function(req,res){
    User.findOne({"nfcID":req.params.nfcID}).populate("services").exec(function(err,result){
        if(err){
            res.status(500).send("DB Error")
        }
        res.status(200).send(result);
    })
})


module.exports = router;