/**
 * Created by francois.drouin on 2/14/2017.
 */
var LocalStrategy = require("passport-local").Strategy;

function init(passport){
    const nonUser = {
        username: "test",
        password: "test"
    };

    passport.serializeUser(function(user, done){
        done(null, user.username);
    });

    passport.deserializeUser(function(id, done){
        done(null, nonUser);
    });

    passport.use('local-login', new LocalStrategy(function(username, password, done){

        if (username === nonUser.username && password === nonUser.password){
            return done(null, nonUser);
        }
        else{
            return done(null, false, {message: "Incorrect username or password"})
        }
    }));
}

module.exports = init;