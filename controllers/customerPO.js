const { CustomerPO } = require('../config');

class CustomerPOController {
  static createOrder(req, res) {
    const { price, deliverablesType } = req.body;

    CustomerPO.create({ price, deliverablesType })
      .then(order => {
        return res.status(201).json(order);
      })
      .catch(error => {
        return res.status(400).json({ error });
      })
  }

  static readAllOrder(req, res) {
    CustomerPO.find()
      .sort('customerPO')
      .then(orders => {
        return res.status(200).json(orders);
      })
      .catch(error => {
        return res.status(500).json({ error });
      })
  }

  static readOneOrder(req, res) {
    const { id } = req.params;

    CustomerPO.findOne({ customerPO: id })
      .then(order => {
        return res.status(200).json(order);
      })
      .catch(error => {
        return res.status(500).json({ error });
      })
  }

  static updateOrder(req, res) {
    const { id } = req.params;
    const { price, deliverablesType } = req.body;

    CustomerPO.findOneAndUpdate({ customerPO: id }, { price, deliverablesType }, { new: true, runValidators: true })
      .then(order => {
        return res.status(200).json(order);
      })
      .catch(error => {
        return res.status(500).json({ error });
      })
  }

  static deleteOrder(req, res) {
    const { id } = req.params;

    CustomerPO.findOneAndDelete({ customerPO: id })
      .then(order => {
        return res.status(200).json({ message: `Success delete CustomerPo with ID ${id}` });
      })
      .catch(error => {
        return res.status(500).json({ error });
      })
  }
}

module.exports = CustomerPOController;