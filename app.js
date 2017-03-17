/**
 * Created by francois.drouin on 2017-02-09.
 */
var express = require("express");
var morgan = require("morgan");
var passport = require("passport");
var session = require("express-session");
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var models = require("./models");
var favicon = require("serve-favicon");
var path = require("path");

var app = express();

app.set("view engine", "ejs");

app.use('/static', express.static('public'));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
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

app.use('/', require("./routes/index")(passport));


models.sequelize.sync().then(function(){
    app.listen(8081);
});