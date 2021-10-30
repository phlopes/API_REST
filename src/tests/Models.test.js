const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongoConnection = require('../../src/models/connection');
const ShipperModel = require('../../src/models/shipperModel');

describe('Testando a camada shipperModel', () => {
  let mockConnection;

  const payloadShipper = {
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
     const response = await ShipperModel.createShipper(payloadShipper);
     expect(response).to.be.a('object');
  });

  it('esse objeto possui um id do novo Expedidor/Cliente inserido', async () => {
      const response = await ShipperModel.createShipper(payloadShipper);

      expect(response).to.have.a.property('_id');
  });

  // it('deve existir um Expedidor/Cliente com o nome cadastrado!', async () => {
  //    await ShipperModel.createShipper(payloadShipper);
  //    const shipperCreated = await mockConnection.collection('shippers').findOne({ name: payloadShipper.name });
  //    expect(shipperCreated).to.be.not.null;
  //  });

});

});
