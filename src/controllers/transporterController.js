const transporterService = require('../services/transporterService');

const createTransporter = async (req, res) => {
  const { name, doc, about, site } = req.body;
  const active = true;
  const transporter = await transporterService.createTransporter(name, doc, about, active, site);
  return res.status(201).json(transporter)
};
  
module.exports = {
  createTransporter,
};