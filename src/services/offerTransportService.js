const offerTransportModel = require('../models/offerTransportModel');

const createOfferTransport = async (id_transporter, id_offer, value, amount) => {
  const offerTransport = await offerTransportModel.createOfferTransport(id_transporter, id_offer, value, amount)
  return {id_transporter, id_offer, value, amount };
};

module.exports = {
  createOfferTransport
};