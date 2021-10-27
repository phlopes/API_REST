const connect = require('./connection');
const { ObjectId } = require('mongodb');

const createShipper = async (name, doc, about, active, site) => {
  const db = await connect();
  const shipper = await db.collection('shippers').insertOne({ name, doc, about, active, site });
  return {_id: shipper.insertedId, name, doc, about, site };
};

const getShippers = async () => {
  const db = await connect();
  const shippers = await db.collection('shippers').find().toArray();
  return shippers;
}

const getShipperById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await connect();
  const shipper = await db.collection('shippers').findOne(ObjectId(id));
  return shipper;
};

module.exports = {
  createShipper,
  getShippers,
  getShipperById
};