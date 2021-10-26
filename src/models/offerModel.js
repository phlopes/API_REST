const connect = require('./connection');

const createOffer = async (id_shipper, from, to, initial_value, amount, amount_type) => {
  const db = await connect();
  const offer = await db.collection('offers').insertOne({ id_shipper, from, to, initial_value, amount, amount_type });
  return { id_shipper, from, to, initial_value, amount, amount_type };
};

module.exports = {
  createOffer,
}