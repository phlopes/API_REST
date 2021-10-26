const offerService = require('../services/offerService');

const createOffer = async (req, res) => {
  const { id_shipper, from, to, initial_value, amount, amount_type } = req.body;
  const offer = await offerService.createOffer(id_shipper, from, to, initial_value, amount, amount_type);
  return res.status(201).json(offer);
};

const getOffers = async (_req, res) => {
  const offers = await offerService.getOffers();
  return res.status(200).json(offers);
};

module.exports = {
  createOffer,
  getOffers
};
