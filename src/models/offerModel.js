const connect = require('./connection');

const createOffer = async (id_shipper, from, to, initial_value, amount, amount_type) => {
  const db = await connect();
  const offer = await db.collection('offers').insertOne({ id_shipper, from, to, initial_value, amount, amount_type });
  return { id_shipper, from, to, initial_value, amount, amount_type };
};

const getOffers = async () => {
  const db = await connect();
  const offers = await db.collection('offers').find().toArray();
  return offers;
}

module.exports = {
  createOffer,
  getOffers
};