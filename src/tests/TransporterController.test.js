const sinon = require('sinon');
const { expect } = require('chai');
const TransporterController = require('../controllers/transporterController');
const TransporterService = require('../services/transporterService');

describe('Testando a camada TransporterController', () => {
  describe('Quando um Transportador é inserido com sucesso', () => {
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

      sinon.stub(TransporterService, 'createTransporter').resolves(true);
    });

    after(() => {
        TransporterService.createTransporter.restore();
    });

    it('é chamado o status com o código 201', async () => {
      await TransporterController.createTransporter(req, res);
      expect(res.status.calledWith(201)).to.be.equal(true);
    });

    it('é chamado o json com a mensagem "Transporter registered successfully"', async () => {
      await TransporterController.createTransporter(req, res);
      expect(res.json.calledWith({ message: 'Transporter registered successfully' })).to.be.equal(true);
    });
  });
});