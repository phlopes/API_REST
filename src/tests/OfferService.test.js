const { expect } = require('chai');
const sinon = require('sinon');
const OfferService = require('../services/offerService');
const OfferModel = require('../models/offerModel');

const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

describe('Testando a camada OfferService', () => {
  const payload = {
  id_shipper: 1,
  from: "Porto Alegre - RS",
  to: "São Paulo - SP",
  initial_value: 130.00,
  amount: 300.00,
  amount_type: "TON"  
  };

  before(async () => {
    let mockConnection;
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

 
  describe('Quando algum campo não é preenchido, retorna uma mensagem de erro.', () => {
    it('Quando o id_shipper não é preenchido', async () => {
      const { from, to, initial_value, amount, amount_type } = payload;
      const response = await OfferService.createOffer({ from, to, initial_value, amount, amount_type });
      expect(response.code).to.be.equals(400);
      expect(response.message).to.be.equals('"id_shipper" is required');
    });
  
    it('Quando o from não é preenchido', async () => {
      const { id_shipper, from, to, initial_value, amount, amount_type } = payload;
      const response = await OfferService.createOffer({ id_shipper, to, initial_value, amount, amount_type });
      expect(response.code).to.be.equals(400);
      expect(response.message).to.be.equals('"from" is required');
    });

    it('Quando o to não é preenchido', async () => {
      const { id_shipper, from, to, initial_value, amount, amount_type } = payload;
      const response = await OfferService.createOffer({ id_shipper, from, initial_value, amount, amount_type });
      expect(response.code).to.be.equals(400);
      expect(response.message).to.be.equals('"to" is required');
    });

    it('Quando o initial_value não é preenchido', async () => {
      const { id_shipper, from, to, initial_value, amount, amount_type } = payload;
      const response = await OfferService.createOffer({ id_shipper, from, to, amount, amount_type });
      expect(response.code).to.be.equals(400);
      expect(response.message).to.be.equals('"value" is required');
    });

    it('Quando o amount não é preenchido', async () => {
      const { id_shipper, from, to, initial_value, amount, amount_type } = payload;
      const response = await OfferService.createOffer({ id_shipper, from, to, initial_value, amount_type });
      expect(response.code).to.be.equals(400);
      expect(response.message).to.be.equals('"amount" is required');
    });

    it('Quando o amount_type não é preenchido', async () => {
      const { id_shipper, from, to, initial_value, amount, amount_type } = payload;
      const response = await OfferService.createOffer({ id_shipper, from, to, initial_value, amount });
      expect(response.code).to.be.equals(400);
      expect(response.message).to.be.equals('"amount_type" is required');
    });

    it('Quando o id_shipper não esta cadastrado no banco de dados', async () => {
      const response = await OfferService.createOffer(payload);
      expect(response.code).to.be.equals(404);
      expect(response.message).to.be.equals('"shipper" is not registered with the bank');
    });

  describe('Quando oferta é cadastrada com sucesso', () => {
    it('retorna um objeto', async() => {
      const response = await OfferModel.createOffer(payload);
      expect(response).to.be.a('object');
    });
    
    it('esse objeto possui um id_shipper conforme cliente que cadastrou a oferta', async () => {
      const response = await OfferModel.createOffer(payload);
      expect(response).to.have.a.property('id_shipper');
    });
  });  
  });
});