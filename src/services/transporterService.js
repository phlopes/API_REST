const transporterModel = require('../models/transporterModel');

const createTransporter = async (name, doc, about, active, site) => {
  const transporter = await transporterModel.createTransporter(name, doc, about, active, site);
  return transporter;
};

const getTransporters =async () => {
  const transporter = await transporterModel.getTransporters();
  return transporter;
};

module.exports = {
  createTransporter,
  getTransporters
};