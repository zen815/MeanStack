/**
 * Created by zen on 15. 7. 6.
 */

var express = require('express');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var path = require('path');
//var serveStatic = require('serve-static');

var app = express();
app.use(bodyParser.json());
app.use(favicon(path.join(__dirname, '/favicon.ico')));
//app.use('/bootstrap', serveStatic(__dirname + '/node_modules/bootstrap/dist/css/'));
app.use('/bootstrap',       express.static(__dirname + '/node_modules/bootstrap/dist/css/'));

app.use('/angular',         express.static(__dirname + '/node_modules/angular/'));
app.use('/angular-route',   express.static(__dirname + '/node_modules/angular-route/'));  // error

app.use(require('./controllers/static'));
app.use(require('./auth'));
app.use('/api/posts',   require('./controllers/api/posts'));
app.use('/api/sessions',require('./controllers/api/sessions'));
app.use('/api/users',   require('./controllers/api/users'));

var server = app.listen(3000, function() {
    console.log('Server listening on', 3000);
    console.log('localhost:3000');
    console.log('get json: localhost:3000/api/posts');
});

require('./websockets').connect(server);