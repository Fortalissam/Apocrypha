/**
 * Created by francois.drouin on 2/14/2017.
 */
var models = require('../models');
var router = express.Router();

router.get("/secure", isLoggedIn, function(req, res){
    res.render("secure.ejs");
});

router.get("/logout", isLoggedIn, function(req, res){
    req.logout();
    res.sendStatus(200);
});

router.get("/secure", isAuthenticated, function(req, res){
    res.status(200).json({message: "success!"});
});

router.post("/signup", function(req, res){
    var tocreate = {
      username: req.body.username,
      password: req.body.password
    };

    models.Users.create(tocreate).then(function(payload){
        res.sendStatus(200)
    })
});

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect(302, '/login');
}

function isAuthenticated(req, res, next){
    if (req.isAuthenticated()){
        return next();
    }
    res.sendStatus(401);
}

module.exports = router;