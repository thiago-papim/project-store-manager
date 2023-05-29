const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const { expect } = chai;

const productListService = require('../../../src/services/productListServices');
const productListController = require('../../../src/controllers/productListController');
const allProducts = require('../../mocks/allProducts');

describe('Testando busca de produtos', function () {
  const req = {};
  const res = {};

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  });

  afterEach(function () {
    sinon.restore();
  });

  it('Testando getAll', async function () {
    sinon.stub(productListService, 'getAll').resolves(allProducts);
    await productListController.getAll(req, res);
    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.be.calledWith(allProducts);
  });

  it('Testando getById com id inexistente', async function () {
    req.params = { id: 2000 };
    sinon.stub(productListService, 'getById').resolves({ type: 'Error' });
    await productListController.getById(req, res);
    expect(res.status).to.be.calledWith(404);
    expect(res.json).to.be.calledWith({ message: 'Product not found' });
  });

  it('Testando getById com id existente', async function () {
    req.params = { id: 1 };
    sinon.stub(productListService, 'getById').resolves({ type: '', message: allProducts[0] });
    await productListController.getById(req, res);
    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.be.calledWith(allProducts[0]);
  });
});