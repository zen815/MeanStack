/**
 * Created by zen on 15. 7. 6.
 */

var express = require('express');
var bodyParser = require('body-parser');
//var serveStatic = require('serve-static');

var app = express();
app.use(bodyParser.json());

//app.use('/bootstrap', serveStatic(__dirname + '/node_modules/bootstrap/dist/css/'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css/'));

app.use('/api/posts', require('./controllers/api/posts'));
app.use(require('./controllers/static'));

app.listen(3000, function() {
    console.log('Server listening on', 3000);
    console.log('localhost:3000');
    console.log('get json: localhost:3000/api/posts');
});