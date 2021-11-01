const offerService = require('../services/offerService');
const { getShipperById } = require('../models/shipperModel');

const createOffer = async (req, res) => {
  const { id_shipper, from, to, initial_value, amount, amount_type } = req.body;
  const { code, message } = await offerService.createOffer({ id_shipper, from, to, initial_value, amount, amount_type });
  if (message) return res.status(code).json({ message });
  const {name} = await getShipperById(id_shipper)

  return res.status(201).json({ message: `Offer successfully registered in the name of ${name}` });
};

const getOffers = async (_req, res) => {
  const offers = await offerService.getOffers();
  return res.status(200).json(['Offers Registered', offers]);
};

module.exports = {
  createOffer,
  getOffers
};
