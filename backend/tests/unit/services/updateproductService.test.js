const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const updateProductService = require('../../../src/services/updateProductService');
const updateProductModel = require('../../../src/models/updateProductModel');
const productListModel = require('../../../src/models/productListModel');

describe('Testando update Product', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Testando Nome menor que 5 letras', async function () {
    const result = await updateProductService.update(1, 'Test');
    expect(result).to.be.deep.equal({
      type: 'error length',
      message: { message: '"name" length must be at least 5 characters long' },
    });
  });

  it('Testando produto inexistente', async function () {
    sinon.stub(productListModel, 'getById').resolves(undefined);
    const result = await updateProductService.update(2, 'Teste');
    expect(result).to.be.deep.equal({
      type: 'error not found',
      message: { message: 'Product not found' },
    });
  });

  it('Testando produto existente', async function () {
    sinon.stub(productListModel, 'getById').resolves([
      {
        id: 1,
        name: 'Martelo de Thor',
      },
    ]);
    sinon.stub(updateProductModel, 'update').resolves(undefined);
    const result = await updateProductService.update(2, 'Teste');
    expect(result).to.be.deep.equal({ id: 2, name: 'Teste' });
  });
});