const shipperModel = require('../models/shipperModel');

const createShipper = async (name, doc, about, active, site) => {
  const shipper = await shipperModel.createShipper(name, doc, about, active, site);
  return shipper;
};

const getShippers =async () => {
  const shippers = await shipperModel.getShippers();
  return shippers;
};

module.exports = {
  createShipper,
  getShippers
};