const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongoConnection = require('../models/connection');
const ShipperModel = require('../models/shipperModel');
const TransporterModel = require('../models/transporterModel')

describe('Testando a camada Model', () => {
  let mockConnection;

  const payload = {
    name: 'Cliente 01',
    doc: '00.000.000/0000-00',
    about: 'sobre o cliente 01',
    site: 'https://cliente01.com.br'
  };
  
  before(async () => {
    console.log('antes');
    const DBServer = new MongoMemoryServer();
    const URLMock = await DBServer.getUri();

    mockConnection = await MongoClient
      .connect(URLMock, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then((conn) => conn.db('BancoDeDados'));

    sinon.stub(mongoConnection, 'connection' ).resolves(mockConnection);
  });

  after(async () => {
    mongoConnection.connection.restore();
 });

 describe('Quando um Expedidor/Cliente é cadastrado com sucesso', () => {
  it('retorna um objeto', async() => {
     const response = await ShipperModel.createShipper(payload);
     expect(response).to.be.a('object');
  });

  it('esse objeto possui um id do novo Expedidor/Cliente inserido', async () => {
      const response = await ShipperModel.createShipper(payload);
      expect(response).to.have.a.property('_id');
  });
});

describe('Quando um Transportador é cadastrado com sucesso', () => {
  it('retorna um objeto', async() => {
     const response = await TransporterModel.createTransporter(payload);
     expect(response).to.be.a('object');
  });

  it('esse objeto possui um id do novo Transportador inserido', async () => {
      const response = await TransporterModel.createTransporter(payload);
      expect(response).to.have.a.property('_id');
  });
});


});
