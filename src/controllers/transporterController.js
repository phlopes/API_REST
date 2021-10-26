const transporterService = require('../services/transporterService');

const createTransporter = async (req, res) => {
  const { name, doc, about, site } = req.body;
  const active = true;

  const { code, message } = await transporterService.createTransporter(name, doc, about, active, site);
  if (message) return res.status(code).json({ message });

  return res.status(201).json({ message: 'Transporter registered successfully' })
};

const getTransporters =async (_req, res) => {
  const transporter = await transporterService.getTransporters();
  return res.status(200).json(['Registered Transporters', transporter]);
};

  
module.exports = {
  createTransporter,
  getTransporters
};