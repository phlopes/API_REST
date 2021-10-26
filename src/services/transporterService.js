const transporterModel = require('../models/transporterModel');
const { validationFields } = require('../validations/FieldsValidation');

const createTransporter = async (name, doc, about, active, site) => {
  const validations = validationFields(name, doc, about, site);
  if (validations.message) return validations;

  const transporter = await transporterModel.createTransporter(name, doc, about, active, site);
  return { transporter };
};

const getTransporters =async () => {
  const transporter = await transporterModel.getTransporters();
  return transporter;
};

module.exports = {
  createTransporter,
  getTransporters
};