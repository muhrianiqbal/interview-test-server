const router = require('express').Router();
const CustomerPOController = require('./customerPO');
const SiteController = require('./site');
const DeliverablesController = require('./deliverables');

router.use('/site', SiteController);
router.use('/deliverables', DeliverablesController);
router.use('/', CustomerPOController);

module.exports = router;