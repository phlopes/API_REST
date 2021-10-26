const offerService = require('../services/offerService');

const createOffer = async (req, res) => {
  const { id_shipper, from, to, initital_value, amount, amount_type } = req.body;
  const offer = await offerService.createOffer(id_shipper, from, to, initital_value, amount, amount_type);
  return res.status(201).json(offer);
};

module.exports = {
  createOffer
};
