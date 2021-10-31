const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const ShipperModel = require('../models/shipperModel');
const TransporterModel = require('../models/transporterModel')
const OfferModel = require('../models/offerModel');
const offersTransportModel = require('../models/offerTransportModel')

describe('Testando a camada Model', () => {
  let mockConnection;

  const payload = {
    name: 'Cliente 01',
    doc: '00.000.000/0000-00',
    about: 'sobre o cliente 01',
    site: 'https://cliente01.com.br'
  };

  const payloadOffer = {
    id_shipper: 1,
    from: "Porto Alegre - RS",
    to: "São Paulo - SP",
    initial_value: 130.00,
    amount: 300.00,
    amount_type: "TON"
  }

  const payloadOfferTransport = {
    id_transporter: 12,
    id_offer: 1,
    value: 105.00,
    amount: 230.00
  }
  
  before(async () => {
    const DBServer = new MongoMemoryServer();
    const URLMock = await DBServer.getUri();

    mockConnection = await MongoClient
      .connect(URLMock, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })

    sinon.stub(MongoClient, 'connect').resolves(mockConnection);
  });

  after(async () => {
    MongoClient.connect.restore();
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

describe('Quando uma oferta de transporte é cadastrado com sucesso', () => {
  it('retorna um objeto', async() => {
     const response = await OfferModel.createOffer(payloadOffer);
     expect(response).to.be.a('object');
  });

  it('esse objeto possui um id_shipper apontando para o cliente que cadastrou a oferta', async () => {
      const response = await OfferModel.createOffer(payloadOffer);
      expect(response).to.have.a.property('id_shipper');
  });
});

describe('Quando uma oferta de transporte é cadastrado com sucesso', () => {
  it('retorna um objeto', async() => {
     const response = await offersTransportModel.createOfferTransport(payloadOfferTransport);
     expect(response).to.be.a('object');
  });

  it('esse objeto possui um id_transporter apontando para a transṕrtadora que ofertou o serviço', async () => {
      const response = await offersTransportModel.createOfferTransport(payloadOfferTransport);
      expect(response).to.have.a.property('id_transporter');
  });
});

});
