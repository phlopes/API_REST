const connect = require('./connection');

const createTransporter = async (name, doc, about, active, site) => {
  const db = await connect();
  const transporter = await db.collection('transporters').insertOne({ name, doc, about, active, site });
  return {_id: transporter.insertedId, name, doc, about, site };
};

const getTransporters = async () => {
  const db = await connect();
  const transporter = await db.collection('transporters').find().toArray();
  return transporter;
}

module.exports = {
  createTransporter,
  getTransporters
};