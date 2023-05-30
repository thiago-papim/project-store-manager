const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const createProductService = require('../../../src/services/createProductServices');
const createProductModel = require('../../../src/models/createProductModel');

describe('Testando create', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('nome menor que 5 letras', async function () {
    sinon.stub(createProductModel, 'create').resolves(4);
    const result = await createProductService.create('test');
    expect(result).to.be.deep.equal({
      type: 'error',
      message: '"name" length must be at least 5 characters long',
    });
  });
  it('nome igual ou maior que 5 letras', async function () {
    sinon.stub(createProductModel, 'create').resolves(4);
    const result = await createProductService.create('teste');
    expect(result).to.be.deep.equal({
      type: '',
      message: 4,
    });
  });
});