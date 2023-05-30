const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const { expect } = chai;

const mocks = require('../services/mocks/objInsertSale');
const insertSaleService = require('../../../src/services/insertSaleService');
const insertSaleController = require('../../../src/controllers/insertSaleController');

describe('Testando insert', function () {
  const req = {};
  const res = {};

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  });

  afterEach(function () {
    sinon.restore();
  });

  it('Testando insert correto', async function () {
    req.body = mocks.arrSales;
    sinon.stub(insertSaleService, 'insertSale').resolves(mocks.objInsert);
    await insertSaleController.insertSale(req, res);
    expect(res.status).to.be.calledWith(201);
    expect(res.json).to.be
      .calledWith(mocks.objInsert);
  });

  it('Testando sem a chave productId ou quantity', async function () {
    req.body = [
      {
        producId: 1,
        quantity: 1,
      },
    ];
    sinon.stub(insertSaleService, 'insertSale').resolves(undefined);
    await insertSaleController.insertSale(req, res);
    expect(res.status).to.be.calledWith(400);
    expect(res.json).to.be
      .calledWith({ message: '"productId" is required' });
  });
  it('Testando com valor invalido', async function () {
    req.body = [
      {
        productId: 1,
        quantity: 0,
      },
    ];
    sinon.stub(insertSaleService, 'insertSale').resolves(undefined);
    await insertSaleController.insertSale(req, res);
    expect(res.status).to.be.calledWith(422);
    expect(res.json).to.be
      .calledWith({ message: '"quantity" must be greater than or equal to 1' });
  });
});