const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const { expect } = chai;

const deleteSaleService = require('../../../src/services/deleteSaleService');
const deleteSaleController = require('../../../src/controllers/deleteSaleController');

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
    sinon.stub(deleteSaleService, 'deleteSale').resolves(undefined);
    await deleteSaleController.deleteProduct(req, res);
    expect(res.status).to.be.calledWith(204);
    expect(res.end).to.be.calledWith();
  });

  it('Testando id incorreto', async function () {
    req.params = { id: 99999 };
    sinon.stub(deleteSaleService, 'deleteSale').resolves({
      type: 'error not found',
      message: { message: 'Sale not found' },
    });
    await deleteSaleController.deleteProduct(req, res);
    expect(res.status).to.be.calledWith(404);
    expect(res.json).to.be.calledWith({ message: 'Sale not found' });
  });
});