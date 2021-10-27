const connect = require('./connection');

const createOfferTransport = async (id_transporter, id_offer, value, amount) => {
  const db = await connect();
  const offerTransport = await db.collection('offersTransports').insertOne({ id_transporter, id_offer, value, amount });
  return { id_transporter, id_offer, value, amount };
};

const getOfferTransports = async () => {
  const db = await connect();
  const offerTransports = await db.collection('offersTransports').find().toArray();
  return offerTransports;
}

module.exports = {
  createOfferTransport,
  getOfferTransports
};