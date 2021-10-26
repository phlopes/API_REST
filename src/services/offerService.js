const offerModel = require('../models/offerModel');

const createOffer = async (id_shipper, from, to, initial_value, amount, amount_type) => {
  const offer = await offerModel.createOffer(id_shipper, from, to, initial_value, amount, amount_type);
  return offer;
};

module.exports = {
  createOffer
};