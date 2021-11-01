const offerTransportService = require('../services/offerTransportService')

const createOfferTransporter = async (req, res) => {
  const { id_transporter, id_offer, value, amount } = req.body;

  const { code, message } = await offerTransportService.createOfferTransport({ id_transporter, id_offer, value, amount });
  if (message) return res.status(code).json({ message })
  
  return res.status(201).json({ message: 'transport offer registered successfully' });
};

const getOfferTransports = async (_req, res) => {
  const offerTransports = await offerTransportService.getOfferTransports();
  return res.status(200).json(offerTransports);
};

module.exports = {
  createOfferTransporter,
  getOfferTransports
};