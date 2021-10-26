const shipperService = require('../services/shipperService');

const createShipper = async (req, res) => {
  const { name, doc, about, site } = req.body;
  const active = true;

  const { code, message } = await shipperService.createShipper(name, doc, about, active, site);
  if (message) return res.status(code).json({ message });

  return res.status(201).json({ message: 'Customer registered successfully' })
};

const getShippers =async (_req, res) => {
  const shippers = await shipperService.getShippers();
  return res.status(200).json(['Registered Customers', shippers]);
};

module.exports = {
  createShipper,
  getShippers
};