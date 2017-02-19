/**
 * Created by francois.drouin on 2/14/2017.
 */
var models = require('../models');

module.exports = function(app, passport){

    app.post("/api/login", passport.authenticate('local-login'), function(req, res){

        res.sendStatus(200);
    });

    app.get("/secure",
        isLoggedIn,
        function(req, res){
            res.render("secure.ejs");
        });

    app.get("/api/logout", isLoggedIn, function(req, res){
        req.logout();
        res.sendStatus(200);
    });

    app.get("/api/secure", isAuthenticated, function(req, res){
        res.status(200).json({message: "success!"});
    });

    app.post("/api/signup", function(req, res){
        var tocreate = req.body;

        models.Users.create(tocreate).then(function(payload){res.sendStatus(200)})
    });

    // route middleware to make sure a user is logged in
    function isLoggedIn(req, res, next) {

        // if user is authenticated in the session, carry on
        if (req.isAuthenticated())
            return next();

        // if they aren't redirect them to the home page
        res.redirect('/login');
    }

    function isAuthenticated(req, res, next){
        if (req.isAuthenticated()){
            return next();
        }
        res.sendStatus(401);
    }
};