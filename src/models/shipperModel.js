const connect = require('./connection');

const createShipper = async (name, doc, about, active, site) => {
  const db = await connect();
  const shipper = await db.collection('shippers').insertOne(name, doc, about, active, site);
  return shipper;
};

module.exports = {
  createShipper
};