/**
 * Created by francois.drouin on 2/14/2017.
 */
var models = require('~/models');
var express = require("express");
var router = express.Router();
var auth = require("~/authentication");

router.get("/secure", auth.isLoggedIn, function(req, res){
    res.render("secure.ejs");
});

router.get("/logout", auth.isLoggedIn, function(req, res){
    req.logout();
    res.sendStatus(200);
});

router.get("/secure", auth.isAuthenticated, function(req, res){
    res.status(200).json({message: "success!"});
});

router.post("/signup", function(req, res){
    var tocreate = {
      username: req.body.username,
      password: req.body.password
    };

    models.Users.count({where: {username: tocreate.username}}).then(function(count){
        if (count == 0){
            models.Users.create(tocreate).then(function(payload){
                res.sendStatus(200);
            })
        }
        else{
            res.sendStatus(403);
        }
    });
});

module.exports = router;