const offerTransportService = require('../services/offerTransportService')

const createOfferTransporter = async (req, res) => {
  const { id_transporter, id_offer, value, amount } = req.body;
  const offerTransporter = await offerTransportService.createOfferTransport(id_transporter, id_offer, value, amount);
  return res.status(201).json(offerTransporter);
};

module.exports = {
  createOfferTransporter
};