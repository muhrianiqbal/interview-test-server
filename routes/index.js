const router = require('express').Router();
const CustomerPOController = require('./customerPO');
const SiteController = require('./site');
const DeliverablesController = require('./deliverables');

router.use('/', CustomerPOController);
router.use('/site', SiteController);
router.use('/deliverables', DeliverablesController);

module.exports = router;