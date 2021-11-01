const sinon = require('sinon');
const { expect } = require('chai');
const ShipperController = require('../controllers/shipperController');
const ShipperService = require('../services/shipperService');

describe('Testando a camada ShipperController', () => {
  describe('Quando um Expedidor/Cliente é inserido com sucesso', () => {
    const res = {};
    const req = {};

    before(() => {
      req.body = {
        name: "Nome Cliente",
        doc: "00.000.000/0000-00", 
        about: "sobre a empresa", 
        site: "https://cliente.com.br" 
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(ShipperService, 'createShipper').resolves(true);
    });

    after(() => {
      ShipperService.createShipper.restore();
    });

    it('é chamado o status com o código 201', async () => {
      await ShipperController.createShipper(req, res);
      expect(res.status.calledWith(201)).to.be.equal(true);
    });

    it('é chamado o json com a mensagem "Customer registered successfully"', async () => {
      await ShipperController.createShipper(req, res);
      expect(res.json.calledWith({ message: 'Customer registered successfully' })).to.be.equal(true);
    });
  });
});
