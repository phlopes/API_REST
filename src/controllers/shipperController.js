const shipperService = require('../services/shipperService');

const createShipper = async (req, res) => {
  const { name, doc, about, active, site } = req.body;
  const shipper = await shipperService.createShipper(name, doc, about, active, site);
  return res.status(201).json(shipper)
};

const getShippers =async (_req, res) => {
  const shippers = await shipperService.getShippers();
  return res.status(200).json(shippers);
};

module.exports = {
  createShipper,
  getShippers
};