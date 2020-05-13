const express = require('express');
const router = express.Router();


router.use('/user', require('./users'))
router.use('/manga', require('./manga'))
router.use('/anime', require('./anime'))

module.exports = router;