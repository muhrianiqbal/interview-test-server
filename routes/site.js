const router = require('express').Router();
const SiteController = require('../controllers/site');

router.get('/', SiteController.readAllSite);
router.get('/:id', SiteController.readOneSite);
router.post('/add', SiteController.createSite);
router.put('/:id', SiteController.updateSite);
router.delete('/:id', SiteController.deleteSite);

module.exports = router;