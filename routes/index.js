/**
 * Created by francois.drouin on 2/14/2017.
 */
var router = express.Router();
module.exports = function(passport){
    
    let loginRouter = require("./auth.js")(passport);
    
    router.post("/api/login", passport.authenticate('local-login'), function(req, res){
        res.sendStatus(200);
    });
    
    router.use("/api", loginRouter);
    
    router.get(function(req, res){
        res.render("index");
    });
    return router;
};