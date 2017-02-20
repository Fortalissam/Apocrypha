/**
 * Created by francois.drouin on 2/14/2017.
 */
var LocalStrategy = require("passport-local").Strategy;
var models = require("../models");

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
        models.Users.findOne({ where: {
            username: username
        }}).then(function(payload){
            if (payload === null){
                return done (null, false, {message: "Incorrect username"})
            }
            if (payload.validatePassword(password)){
                return done(null, payload)
            } else {
                return done(null, false, {message: "Incorrect password"})
            }
        });
    }));
}

module.exports = init;
