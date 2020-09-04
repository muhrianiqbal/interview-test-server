const router = require('express').Router();
const DeliverablesController = require('../controllers/deliverables');

router.get('/', DeliverablesController.readAllDeliverables);
router.get('/:id', DeliverablesController.readOneDeliverables);
router.post('/add', DeliverablesController.createDeliverables);
router.put('/:id', DeliverablesController.updateDeliverables);
router.delete('/:id', DeliverablesController.deleteDeliverables);

module.exports = router;