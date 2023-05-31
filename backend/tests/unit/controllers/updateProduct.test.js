const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const { expect } = chai;

const updateProductController = require('../../../src/controllers/updateProductController');
const updateProductService = require('../../../src/services/updateProductService');

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
  it('Testando sem a chave name', async function () {
    req.body = { nae: 'Teste' };
    req.params = { id: 1 };
    await updateProductController.update(req, res);
    expect(res.status).to.be.calledWith(400);
    expect(res.json).to.be
      .calledWith({ message: '"name" is required' });
  });
  it('Testando name menor que 5 letras', async function () {
    req.body = { name: 'Teste' };
    req.params = { id: 1 };
    sinon.stub(updateProductService, 'update').resolves({
      type: 'error length',
      message: { message: '"name" length must be at least 5 characters long' },
    });
    await updateProductController.update(req, res);
    expect(res.status).to.be.calledWith(422);
    expect(res.json).to.be
      .calledWith({ message: '"name" length must be at least 5 characters long' });
  });
  it('Testando produto inexistente', async function () {
    req.body = { name: 'Teste' };
    req.params = { id: 9999999 };
    sinon.stub(updateProductService, 'update').resolves({
      type: 'error not found',
      message: { message: 'Product not found' },
    });
    await updateProductController.update(req, res);
    expect(res.status).to.be.calledWith(404);
    expect(res.json).to.be
      .calledWith({ message: 'Product not found' });
  });
  it('Testando corretamente', async function () {
    req.body = { name: 'Novo Produto' };
    req.params = { id: 1 };
    sinon.stub(updateProductService, 'update').resolves({
      id: 1,
      name: 'Novo Produto',
    });
    await updateProductController.update(req, res);
    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.be
      .calledWith({ id: 1, name: 'Novo Produto' });
  });
});