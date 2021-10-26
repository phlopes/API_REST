const connect = require('./connection');

const createShipper = async (name, doc, about, active, site) => {
  const db = await connect();
  const shipper = await db.collection('shippers').insertOne({ name, doc, about, active, site });
  return {_id: shipper.insertedId, name, doc, about, active, site };
};

module.exports = {
  createShipper
};