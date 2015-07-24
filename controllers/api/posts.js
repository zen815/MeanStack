/**
 * Created by zen on 15. 7. 8.
 */

var router = require('express').Router();
var websockets = require('../../websockets');
var pubsub = require('../../pubsub');
var Post = require('../../models/post');

router.get('/', function(req, res, next){
    Post.find()
    .sort('-date')
    .exec(function(err, posts){
        if(err){ return next(err); }
        res.json(posts);
    });
});

router.post('/', function(req,res,next){
    var post = new Post({ body: req.body.body });

    if(typeof req.auth.username == "undefined") {
        return res.sendStatus(401);
    }
    post.username = req.auth.username;
    post.save(function(err,post){
        if(err) { return next(err); }
        pubsub.publish('new_post', post);
        res.status(201).json(post);
    });
});

pubsub.subscribe('new_post', function(post){
   websockets.broadcast('new_post', post);
});


module.exports = router;