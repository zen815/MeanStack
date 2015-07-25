/**
 * Created by zen on 15. 7. 17.
 */
var router  = require('express').Router();
var bcrypt  = require('bcrypt');
var jwt     = require('jwt-simple');

var config  = require('../../config');
var User    = require('../../models/user');

router.post('/sessions', function(req, res, next) {
    var username = req.body.username;
    User.findOne( {username: username})
        .select('password')
        .exec(function(err, user){
            if(err) { return next(err); }
            if(!user) {
                console.log("error: sessions.js not user object");
                return res.sendStatus(401);
            }

            bcrypt.compare(req.body.password, user.password, function(err, valid){
                if(err) { return next(err); }
                if(!valid) {
                    console.log("error: sessions.js compare not users");
                    return res.sendStatus(401);
                }
                var token = jwt.encode({username: username}, config.secret);
                res.send(token);
            });
        });
});

module.exports = router;