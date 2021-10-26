const offerModel = require('../models/offerModel');
const { validationFields } = require('../validations/offerValidations')

const createOffer = async (id_shipper, from, to, initial_value, amount, amount_type) => {
  const validation = await validationFields(id_shipper, from, to, initial_value, amount, amount_type);
  if (validation.message) return validation;

  const offer = await offerModel.createOffer(id_shipper, from, to, initial_value, amount, amount_type);
  return offer;
};

const getOffers = async () => {
  const offers = await offerModel.getOffers();
  return offers;
};

module.exports = {
  createOffer,
  getOffers
};