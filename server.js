/**
 * Created by zen on 15. 7. 6.
 */

var express = require('express');

var favicon = require('serve-favicon');
var path = require('path');
var logger = require('morgan');
var websockets = require('./websockets');

var app = express();
app.use(favicon(path.join(__dirname, '/favicon.ico')));
app.use(logger('dev'));

app.use('/bootstrap',       express.static(__dirname + '/node_modules/bootstrap/dist/css/'));
app.use('/angular',         express.static(__dirname + '/node_modules/angular/'));
app.use('/angular-route',   express.static(__dirname + '/node_modules/angular-route/'));  // error

app.use(require('./controllers'));

var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
    console.log('Server', process.pid, 'listening on', port);
    console.log('http://localhost:',port);
});

websockets.connect(server);