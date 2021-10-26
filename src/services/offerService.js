const offerModel = require('../models/offerModel');

const createOffer = async (id_shipper, from, to, initial_value, amount, amount_type) => {
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