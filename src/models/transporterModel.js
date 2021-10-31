const { connection } = require('./connection');
const { ObjectId } = require('mongodb');

const createTransporter = async ({ name, doc, about, active, site }) => {
  const db = await connection();
  const transporter = await db.collection('transporters').insertOne({ name, doc, about, active, site });
  return {_id: transporter.insertedId, name, doc, about, site };
};

const getTransporters = async () => {
  const db = await connection();
  const transporter = await db.collection('transporters').find().toArray();
  return transporter;
};

const getTransporterById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await connection();
  const transporter = await db.collection('transporters').findOne(ObjectId(id));
  return transporter;
};

module.exports = {
  createTransporter,
  getTransporters,
  getTransporterById
};