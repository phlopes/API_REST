const { expect } = require('chai');
const TransporterService = require('../services/transporterService');

describe('Testando a camada TransporterService', () => {
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
      const response = await TransporterService.createTransporter({doc, about, active, site});
      expect(response.code).to.be.equals(400);
      expect(response.message).to.be.equals('"name" is required');
    });

    it('Quando o doc não é preenchido', async () => {
      const { name, about, active, site } = payload;
      const response = await TransporterService.createTransporter({name, about, active, site});
      expect(response.code).to.be.equals(400);
      expect(response.message).to.be.equals('"doc" is required');
    });

    it('Quando o about não é preenchido', async () => {
      const { name, doc, active, site } = payload;
      const response = await TransporterService.createTransporter({name, doc, active, site});
      expect(response.code).to.be.equals(400);
      expect(response.message).to.be.equals('"about" is required');
      });

    it('Quando o site não é preenchido', async () => {
      const { name, doc, about, active } = payload;
      const response = await TransporterService.createTransporter({name, doc, about, active});
      expect(response.code).to.be.equals(400);
      expect(response.message).to.be.equals('"site" is required');
    });

  describe('Quando um Transportador é cadastrado com sucesso', () => {
    it('retorna um objeto', async() => {
      const response = await TransporterService.createTransporter(payload);
      expect(response).to.be.a('object');
    });
  
    it('esse objeto possui um id do novo Transportador inserido', async () => {
      const response = await TransporterService.createTransporter(payload);
      const { transporter } = response;
      expect(transporter).to.have.a.property('_id');
    });  
  });
  });
});