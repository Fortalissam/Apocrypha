/**
 * Created by francois.drouin on 2017-02-09.
 */
var express = require("express");
var morgan = require("morgan");
var passport = require("passport");
var session = require("express-session");
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');

var app = express();

app.use('/static', express.static('public'));
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms
app.use(morgan("dev"));
app.use(session({
    secret: "test"
}));
//app.disable('etag');

require("./authentication/passportConfig.js")(passport);

app.use(passport.initialize());
app.use(passport.session());

require("./routes")(app, passport);

app.set("view engine", "ejs");

app.listen(8081);