const connect = require('./connection');

const createTransporter = async (name, doc, about, active, site) => {
  const db = await connect();
  const transporter = await db.collection('transporters').insertOne({ name, doc, about, active, site });
  return {_id: transporter.insertedId, name, doc, about, site };
};

module.exports = {
  createTransporter
};