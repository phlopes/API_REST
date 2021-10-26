const shipperService = require('../services/shipperService');

const createShipper = async (req, res) => {
  const { name, doc, about, active, site } = req.body;
  const shipper = await shipperService.createShipper(name, doc, about, active, site);
  return res.status(201).json(shipper)
};

module.exports = {
  createShipper
};