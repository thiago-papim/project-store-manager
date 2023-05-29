const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const { expect } = chai;

const salesListService = require('../../../src/services/salesListService');
const salesListController = require('../../../src/controllers/salesListController');
const allSales = require('../../mocks/allSales');
const salesIdOne = require('../../mocks/salesIdOne');

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
    sinon.stub(salesListService, 'getAll').resolves(allSales);
    await salesListController.getAll(req, res);
    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.be.calledWith(allSales);
  });

  it('Testando getById com id inexistente', async function () {
    req.params = { id: 2000 };
    sinon.stub(salesListService, 'getById').resolves({ type: 'Error' });
    await salesListController.getById(req, res);
    expect(res.status).to.be.calledWith(404);
    expect(res.json).to.be.calledWith({ message: 'Sale not found' });
  });

  it('Testando getById com id existente', async function () {
    req.params = { id: 1 };
    sinon.stub(salesListService, 'getById').resolves({ type: '', message: salesIdOne });
    await salesListController.getById(req, res);
    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.be.calledWith(salesIdOne);
  });
});