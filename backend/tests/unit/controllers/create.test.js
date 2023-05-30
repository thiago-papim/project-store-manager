const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const { expect } = chai;

const createProductService = require('../../../src/services/createProductServices');
const createProductController = require('../../../src/controllers/createProductController');

describe('Testando create', function () {
  const req = {};
  const res = {};

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  });

  afterEach(function () {
    sinon.restore();
  });

  // it('Testando getAll', async function () {
  //   sinon.stub(productListService, 'getAll').resolves(allProducts);
  //   await productListController.getAll(req, res);
  //   expect(res.status).to.be.calledWith(200);
  //   expect(res.json).to.be.calledWith(allProducts);
  // });

  it('Testando create com nome menor que 5 letras', async function () {
    req.body = { name: 'test' };
    sinon.stub(createProductService, 'create').resolves({
      type: 'error',
      message: '"name" length must be at least 5 characters long',
    });
    await createProductController.create(req, res);
    expect(res.status).to.be.calledWith(422);
    expect(res.json).to.be
      .calledWith({ message: '"name" length must be at least 5 characters long' });
  });

  it('Testando create com nome inexistente', async function () {
    req.body = { name: '' };
    sinon.stub(createProductService, 'create').resolves({
      type: 'error',
      message: '"name" length must be at least 5 characters long',
    });
    await createProductController.create(req, res);
    expect(res.status).to.be.calledWith(400);
    expect(res.json).to.be
      .calledWith({ message: '"name" is required' });
  });

  it('Testando create com nome correto', async function () {
    req.body = { name: 'Teste' };
    sinon.stub(createProductService, 'create').resolves({
      type: '',
      message: [[4], 0],
    });
    await createProductController.create(req, res);
    expect(res.status).to.be.calledWith(201);
    expect(res.json).to.be
      .calledWith(4);
  });
});