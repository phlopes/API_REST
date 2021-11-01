const { expect } = require('chai');
const ShipperService = require('../services/shipperService');

describe('Testando a camada ShipperService', () => {
  const payload = {
    name: 'Cliente 01',
    doc: '00.000.000/0000-00',
    about: 'sobre o cliente 01',
    active: true, 
    site: 'https://cliente01.com.br'
  };

  describe('Quando algum campo não é preenchido, retorna uma mensagem de erro.', () => {
    it('Quando o name não é preenchido', async () => {
      const { doc, about, active, site } = payload;
      const response = await ShipperService.createShipper(doc, about, active, site);
      expect(response.code).to.be.equals(400);
      expect(response.message).to.be.equals('"name" is required');
    });

    it('Quando o doc não é preenchido', async () => {
      const { name, about, active, site } = payload;
      const response = await ShipperService.createShipper({name, about, active, site});
      expect(response.code).to.be.equals(400);
      expect(response.message).to.be.equals('"doc" is required');
    });

    it('Quando o about não é preenchido', async () => {
      const { name, doc, active, site } = payload;
      const response = await ShipperService.createShipper({name, doc, active, site});
      expect(response.code).to.be.equals(400);
      expect(response.message).to.be.equals('"about" is required');
    });

    it('Quando o site não é preenchido', async () => {
      const { name, doc, about, active } = payload;
      const response = await ShipperService.createShipper({name, doc, about, active});
      expect(response.code).to.be.equals(400);
      expect(response.message).to.be.equals('"site" is required');
    });

  describe('Quando um Expedidor/Cliente é cadastrado com sucesso', () => {
    it('retorna um objeto', async() => {
      const response = await ShipperService.createShipper(payload);
      expect(response).to.be.a('object');
    });
  
    it('esse objeto possui um id do novo Expedidor/Cliente inserido', async () => {
      const response = await ShipperService.createShipper(payload);
      const { shipper } = response;
      expect(shipper).to.have.a.property('_id');
    });  
  });
  });
});
