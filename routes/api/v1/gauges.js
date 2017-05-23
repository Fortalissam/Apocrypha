/**
 * Created by francois.drouin on 2017-05-23.
 * /api/v1/gauges/
 */
const models = require('~/models');
const express = require("express");
let router = express.Router();
const auth = require("~/authentication");

router.get("/", auth.isLoggedIn, function(req, res){
    models.Gauges.findAll()
        .then(function(payload){
        res.json(payload);
    })

});

router.post("/", auth.isLoggedIn, function(req, res){
    let toCreate = models.Gauges.build({
        name: req.body.name
    })

    toCreate.save().then(function(gauge){

    }).catch(function(payload){
        
    })

});

module.exports = router;