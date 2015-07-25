/**
 * Created by zen on 15. 7. 8.
 */

var express = require('express');
var router = express.Router();
var path = require("path");

//var bodyParser = require('body-parser');
//router.use(bodyParser.json());

//router.use(require('../auth'));
//router.use('/', require('./static'));
//router.use('/api', require('./api'));

//router.use('/api/posts',   require('./controllers/api/posts'));
//router.use('/api/sessions',require('./controllers/api/sessions'));
//router.use('/api/users',   require('./controllers/api/users'));

router.use(express.static(path.join(__dirname, '..', '/assets')));
router.use('/templates', express.static(path.join(__dirname, '..', '/templates')));

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '..','/layouts/app.html'));
});

module.exports = router;