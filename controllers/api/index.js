/**
 * Created by zen on 15. 7. 25.
 */
var router = require('express').Router()

router.use(require('./posts'))
router.use(require('./sessions'))
router.use(require('./users'))

module.exports = router