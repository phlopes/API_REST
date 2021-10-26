const connect = require('./connection');

const createOfferTransport = async (id_transporter, id_offer, value, amount) => {
  const db = await connect();
  const offerTransport = await db.collection('offersTransports').insertOne({ id_transporter, id_offer, value, amount });
  return { id_transporter, id_offer, value, amount };
};

module.exports = {
  createOfferTransport
}