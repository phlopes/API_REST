const shipperModel = require('../models/recipeModel');

const createShipper = async (name, doc, about, active, site) => {
  const shipper = await shipperModel.createShipper(name, doc, about, active, site);
  return shipper;
};

module.exports = {
  createShipper
};