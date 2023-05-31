const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const { expect } = chai;

const updateSaleController = require('../../../src/controllers/updateSaleController');
const updateSaleService = require('../../../src/services/updateProductService');
const salesListModel = require('../../../src/models/salesListModel');
const productListModel = require('../../../src/models/productListModel');

describe('Testando updateProduct', function () {
  const req = {};
  const res = {};

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  });

  afterEach(function () {
    sinon.restore();
  });
  it('Testando sem a chave quantity', async function () {
    req.body = { quanti: 1 };
    req.params = { saleId: 1, productid: 1 };
    await updateSaleController.updateSale(req, res);
    expect(res.status).to.be.calledWith(400);
    expect(res.json).to.be
      .calledWith({ message: '"quantity" is required' });
  });
  it('Testando quantity menor que 0', async function () {
    req.body = { quantity: -1 };
    req.params = { saleId: 1, productid: 1 };
    await updateSaleController.updateSale(req, res);
    expect(res.status).to.be.calledWith(422);
    expect(res.json).to.be
      .calledWith({ message: '"quantity" must be greater than or equal to 1' });
  });
  it('Testando sale inexistente', async function () {
    req.body = { quantity: 10 };
    req.params = { saleId: 1, productid: 1 };
    sinon.stub(salesListModel, 'getById').resolves([]);
    sinon.stub(updateSaleService, 'update').resolves([
      { type: 'Error', message: { message: 'Sale not found' } }]);
    await updateSaleController.updateSale(req, res);
    expect(res.status).to.be.calledWith(404);
    expect(res.json).to.be
      .calledWith({ message: 'Sale not found' });
  });
  it('Testando product inexistente', async function () {
    req.body = { quantity: 10 };
    req.params = { saleId: 1, productid: 1 };
    sinon.stub(salesListModel, 'getById').resolves([1, 2]);
    sinon.stub(productListModel, 'getById').resolves(undefined);
    sinon.stub(updateSaleService, 'update').resolves([
      { type: 'Error', message: { message: 'Sale not found' } }]);
    await updateSaleController.updateSale(req, res);
    expect(res.status).to.be.calledWith(404);
    expect(res.json).to.be
      .calledWith({ message: 'Product not found in sale' });
  });
});