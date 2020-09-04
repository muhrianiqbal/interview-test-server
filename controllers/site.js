const { Site } = require('../config');

class SiteController {
  static createSite(req, res) {
    const { siteName, address } = req.body;

    Site.create({ siteName, address })
      .then(site => {
        return res.status(201).json(site);
      })
      .catch(error => {
        return res.status(400).json({ error });
      })
  }

  static readAllSite(req, res) {
    Site.find()
      .sort('siteId')
      .then(sites => {
        return res.status(200).json(sites);
      })
      .catch(error => {
        return res.status(500).json({ error });
      })
  }

  static readOneSite(req, res) {
    const { id } = req.params;

    Site.findOne({ siteId: id })
      .then(site => {
        return res.status(200).json(site);
      })
      .catch(error => {
        return res.status(500).json({ error });
      })
  }

  static updateSite(req, res) {
    const { id } = req.params;
    const { siteName, Address } = req.body;

    Site.findOneAndUpdate({ siteId: id }, { siteName, Address }, { new: true, runValidators: true })
      .then(site => {
        return res.status(200).json(site);
      })
      .catch(error => {
        return res.status(500).json({ error });
      })
  }

  static deleteSite(req, res) {
    const { id } = req.params;

    Site.findOneAndDelete({ siteId: id })
      .then(order => {
        return res.status(200).json({ message: `Success delete Site with ID ${id}` });
      })
      .catch(error => {
        return res.status(500).json({ error });
      })
  }
}

module.exports = SiteController;