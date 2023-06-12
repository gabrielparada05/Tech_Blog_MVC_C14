const router = require('express').Router();

const apiRoutes = require('./api');
const postRoutes = require('./homeRoutes.js');

router.use('/', postRoutes);
router.use('/api', apiRoutes);

module.exports = router;
