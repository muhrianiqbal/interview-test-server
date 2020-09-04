const router = require('express').Router();
const CustomerPOController = require('../controllers/customerPO');

router.get('/', CustomerPOController.readAllOrder);
router.get('/:id', CustomerPOController.readOneOrder);
router.post('/add', CustomerPOController.createOrder);
router.put('/:id', CustomerPOController.updateOrder);
router.delete('/:id', CustomerPOController.deleteOrder);

module.exports = router;