/**
 * Created by francois.drouin on 2017-02-09.
 */
var express = require("express");
var morgan = require("morgan");

var app = express();

app.use('/static', express.static('public'));
app.use(morgan("dev"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index");
});

app.listen(8081);