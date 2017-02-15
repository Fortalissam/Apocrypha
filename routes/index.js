/**
 * Created by francois.drouin on 2/14/2017.
 */
module.exports = function(app, passport){
    require("./auth.js")(app, passport);
    app.get("/", function(req, res){
        res.render("index");
    });
};