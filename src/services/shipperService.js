const shipperModel = require('../models/shipperModel');
const { validationFields } = require('../validations/FieldsValidation')

const createShipper = async ({ name, doc, about, active, site }) => {
  const validations = validationFields(name, doc, about, site);
  if (validations.message) return validations;
  
  const shipper = await shipperModel.createShipper(name, doc, about, active, site);
  return { shipper };
};

const getShippers = async () => {
  const shippers = await shipperModel.getShippers();
  return shippers;
};

module.exports = {
  createShipper,
  getShippers
};