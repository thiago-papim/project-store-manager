const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const deleteProductService = require('../../../src/services/deleteProductService');
const productListModel = require('../../../src/models/productListModel');
const deleteProductModel = require('../../../src/models/deleteProductModel');

describe('Testando delete', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Deletando com Id inexistente', async function () {
    sinon.stub(productListModel, 'getById').resolves(undefined);
    sinon.stub(deleteProductModel, 'deleteProduct').resolves(undefined);
    const result = await deleteProductService.deleteProduct(1);
    expect(result).to.be.deep.equal({
      type: 'error not found',
      message: { message: 'Product not found' },
    });
  });
  it('Deletando com Id existente', async function () {
    sinon.stub(productListModel, 'getById').resolves({ id: 1, name: 'Martelo de Thor' });
    sinon.stub(deleteProductModel, 'deleteProduct').resolves(undefined);
    const result = await deleteProductService.deleteProduct(1);
    expect(result).to.be.deep.equal(undefined);
  });
});
