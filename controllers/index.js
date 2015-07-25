/**
 * Created by zen on 15. 7. 25.
 */

var bodyParser = require('body-parser');
var router = require('express').Router();

router.use(require('../auth'));
router.use(bodyParser.json());

router.use('/api', require('./api'));
router.use('/', require('./static'));

module.exports = router