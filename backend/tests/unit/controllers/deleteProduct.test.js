const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const { expect } = chai;

const deleteProductService = require('../../../src/services/deleteProductService');
const deleteProductController = require('../../../src/controllers/deleteProductController');

describe('Testando deleteProduct', function () {
  const req = {};
  const res = {};

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  });

  afterEach(function () {
    sinon.restore();
  });

  it('Testando id correto', async function () {
    req.params = { id: 1 };
    res.end = sinon.stub();
    sinon.stub(deleteProductService, 'deleteProduct').resolves(undefined);
    await deleteProductController.deleteProduct(req, res);
    expect(res.status).to.be.calledWith(204);
    expect(res.end).to.be.calledWith();
  });

  it('Testando id incorreto', async function () {
    req.params = { id: 99999 };
    sinon.stub(deleteProductService, 'deleteProduct').resolves({
      type: 'error not found',
      message: { message: 'Product not found' },
    });
    await deleteProductController.deleteProduct(req, res);
    expect(res.status).to.be.calledWith(404);
    expect(res.json).to.be.calledWith({ message: 'Product not found' });
  });
});