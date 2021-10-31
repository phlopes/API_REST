const offerTransportModel = require('../models/offerTransportModel');
const { validationFields } = require('../validations/offerTransportValidation');

const createOfferTransport = async ({ id_transporter, id_offer, value, amount }) => {
  const validation = await validationFields(id_transporter, id_offer, value, amount)
  if (validation.message) return validation;

  const offerTransport = await offerTransportModel.createOfferTransport(id_transporter, id_offer, value, amount)
  return {id_transporter, id_offer, value, amount };
};

const getOfferTransports = async () => {
  const offerTransports = await offerTransportModel.getOfferTransports();
  return offerTransports;
}

module.exports = {
  createOfferTransport,
  getOfferTransports
};