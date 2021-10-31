const { connection } = require('./connection');
const { ObjectId } = require('mongodb');

const createOffer = async ({ id_shipper, from, to, initial_value, amount, amount_type }) => {
  const db = await connection();
  const offer = await db.collection('offers').insertOne({ id_shipper, from, to, initial_value, amount, amount_type });
  return { id_shipper, from, to, initial_value, amount, amount_type };
};

const getOffers = async () => {
  const db = await connection();
  const offers = await db.collection('offers').find().toArray();
  return offers;
};

const getOfferById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await connection();
  const offer = await db.collection('offers').findOne(ObjectId(id));
  return offer;
};


module.exports = {
  createOffer,
  getOffers,
  getOfferById
};