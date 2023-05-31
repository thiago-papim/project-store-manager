const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const allProducts = require('../../mocks/allProducts');
const getProductNameModel = require('../../../src/models/getProductNameModel');
const getProductNameController = require('../../../src/controllers/getProductNameController');

const { expect } = chai;

describe('Testando getProductName', function () {
  const req = {};
  const res = {};

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  });

  afterEach(function () {
    sinon.restore();
  });
  
    it('Testando sem parametro', async function () {
      req.query = { q: '' };
      sinon.stub(getProductNameModel, 'getProductName').resolves(allProducts);
      await getProductNameController.getProductName(req, res);
      expect(res.status).to.be.calledWith(200);
      expect(res.json).to.be.calledWith(allProducts);
      });

    it('Testando com parametro correto', async function () {
      req.query = { q: 'Martel' };
      sinon.stub(getProductNameModel, 'getProductName').resolves(allProducts[0]);
      await getProductNameController.getProductName(req, res);
      expect(res.status).to.be.calledWith(200);
      expect(res.json).to.be.calledWith(allProducts[0]);
      });
    it('Testando com parametro incorreto', async function () {
      req.query = { q: 'xxxxxxx' };
      sinon.stub(getProductNameModel, 'getProductName').resolves([]);
      await getProductNameController.getProductName(req, res);
      expect(res.status).to.be.calledWith(200);
      expect(res.json).to.be.calledWith([]);
      });
  });
