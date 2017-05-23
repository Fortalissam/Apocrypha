/**
 * Created by francois.drouin on 2017-05-23.
 */
module.exports.isLoggedIn = function (req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect(302, '/login');
};

module.exports.isAuthenticated = function (req, res, next){
    if (req.isAuthenticated()){
        return next();
    }
    res.sendStatus(401);
};