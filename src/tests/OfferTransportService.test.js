const { expect } = require('chai');
const { createOfferTransport } = require('../services/offerTransportService');
const OfferTransporterModel  = require('../models/offerTransportModel')
const OfferModel = require('../models/offerModel');

describe('Testando a camada OfferTransportService', () => {
  const payload = {
    id_transporter: 12,
    id_offer: 1,
    value: 105.00,
    amount: 230.00 
  };

  describe('Quando algum campo não é preenchido, retorna uma mensagem de erro.', () => {
    it('Quando o id_transporter não é preenchido', async () => {
      const { id_offer, value, amount } = payload;
      const response = await createOfferTransport({ id_offer, value, amount });
      expect(response.code).to.be.equals(400);
      expect(response.message).to.be.equals('"id_transporter" is required');
    });
  
    it('Quando o id_offer não é preenchido', async () => {
      const { id_transporter, value, amount } = payload;
      const response = await createOfferTransport({ id_transporter, value, amount });
      expect(response.code).to.be.equals(400);
      expect(response.message).to.be.equals('"id_offer" is required');
    });

    it('Quando o value não é preenchido', async () => {
      const { id_transporter, id_offer, amount } = payload;
      const response = await createOfferTransport({ id_transporter, id_offer, amount });
      expect(response.code).to.be.equals(400);
      expect(response.message).to.be.equals('"value" is required');
    });

    it('Quando o amount não é preenchido', async () => {
      const { id_transporter, id_offer, value } = payload;
      const response = await createOfferTransport({ id_transporter, id_offer, value });
      expect(response.code).to.be.equals(400);
      expect(response.message).to.be.equals('"amount" is required');
    });

  describe('Quando um frete é oferecido com sucesso', () => {
    it('retorna um objeto', async() => {
      const response = await OfferTransporterModel.createOfferTransport(payload);
      expect(response).to.be.a('object');
    });
      
    it('esse objeto possui um id_transporter conforme transportadora que ofertou o serviço de frete', async () => {
      const response = await OfferTransporterModel.createOfferTransport(payload);
      expect(response).to.have.a.property('id_transporter');
    });

    it('esse objeto possui um id_offer conforme oferta que foi cadastrada por um cliente', async () => {
      const response = await OfferTransporterModel.createOfferTransport(payload);
      expect(response).to.have.a.property('id_offer');
    });
  });  
  });
});