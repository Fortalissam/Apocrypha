/**
 * Created by francois.drouin on 2/14/2017.
 */
module.exports = function(app, passport){
    // app.get("/login",
    //     function(req, res, next){
    //         if (req.isAuthenticated()){
    //             res.redirect('/');
    //         }
    //         return next();
    //     },
    //     function(req, res){
    //         res.render("login.ejs");
    //     }
    // );

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
        res.redirect('/login');
    });

    app.get("/api/secure", isAuthenticated, function(req, res){
        res.status(200).json({message: "success!"});
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