/**
 * Created by zen on 15. 7. 17.
 */

var router = require('express').Router();
var bcrypt = require('bcrypt');
var jwt = require('jwt-simple');
var User = require('../../models/user');
var config = require('../../config');

router.get('/', function(req, res, next) {
    if(!req.headers['x-auth']) {
        console.log("users.js get function !req.header");
        return res.sendStatus(401);
    }
    console.log("decode: %s", req.headers['x-auth']);
    var auth = jwt.decode(req.headers['x-auth'], config.secret);
    console.log("users.js: %s", auth.username);
    User.findOne({username: auth.username}, function(err, user) {
        if(err) { return next(err); }
        res.json(user);
        //console.log(user.username, user.password);
    });
});

router.post('/', function(req, res, next) {
    console.log("users.js post start");

    var user = new User({username: req.body.username});
    bcrypt.hash(req.body.password, 10, function(err, hash){
        if(err) { return next(err); }
        user.password = hash;
        user.save(function(err) {
            if(err) { return next(err); }
            res.sendStatus(201);
        });
    });
    console.log("users.js post end");
});

module.exports = router;