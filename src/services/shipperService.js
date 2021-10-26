const shipperModel = require('../models/shipperModel');

const createShipper = async (name, doc, about, active, site) => {
  const shipper = await shipperModel.createShipper(name, doc, about, active, site);
  return shipper;
};

module.exports = {
  createShipper
};