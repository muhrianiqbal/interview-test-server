const { Deliverables } = require('../config');

class DeliverablesController {
  static createDeliverables(req, res) {
    const { customerPO, siteId, siteName, deliverablesType, installationStart } = req.body;

    Deliverables.create({ customerPO, siteId, siteName, deliverablesType, installationStart })
      .then(data => {
        return res.status(201).json(data);
      })
      .catch(error => {
        return res.status(400).json({ error });
      })
  }

  static readAllDeliverables(req, res) {
    Deliverables.find()
      .sort('_id')
      .then(data => {
        return res.status(200).json(data);
      })
      .catch(error => {
        return res.status(500).json({ error });
      })
  }

  static readOneDeliverables(req, res) {
    const { id } = req.params;

    Deliverables.findOne({ _id: id })
      .then(data => {
        return res.status(200).json(data);
      })
      .catch(error => {
        return res.status(500).json({ error });
      })
  }

  static updateDeliverables(req, res) {
    const { id } = req.params;
    const { customerPO, siteId, siteName, deliverablesType, installationStart } = req.body;

    Deliverables.findOneAndUpdate({ _id: id }, { customerPO, siteId, siteName, deliverablesType, installationStart }, { new: true, runValidators: true })
      .then(data => {
        return res.status(200).json(data);
      })
      .catch(error => {
        return res.status(500).json({ error });
      })
  }

  static deleteDeliverables(req, res) {
    const { id } = req.params;

    Deliverables.findOneAndDelete({ _id: id })
      .then(data => {
        return res.status(200).json({ message: `Success delete Deliverables with ID ${id}` });
      })
      .catch(error => {
        return res.status(500).json({ error })
      })    
  }
}

module.exports = DeliverablesController;