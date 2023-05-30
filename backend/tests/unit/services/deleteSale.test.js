const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

// const deleteProductService = require('../../../src/services/deleteProductService');
// const productListModel = require('../../../src/models/productListModel');
// const deleteProductModel = require('../../../src/models/deleteProductModel');
const deleteSaleModel = require('../../../src/models/deleteSaleModel');
const deleteSaleService = require('../../../src/services/deleteSaleService');
const saleListModel = require('../../../src/models/salesListModel');

describe('Testando delete', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Deletando com Id inexistente', async function () {
    sinon.stub(saleListModel, 'getById').resolves([]);
    sinon.stub(deleteSaleModel, 'deleteSale').resolves(undefined);
    const result = await deleteSaleService.deleteSale(1);
    expect(result).to.be.deep.equal({
      type: 'error not found',
      message: { message: 'Sale not found' },
    });
  });
  it('Deletando com Id existente', async function () {
    sinon.stub(saleListModel, 'getById').resolves([
      {
        date: '2023-05-30T22:44:06.000Z',
        productId: 1,
        quantity: 5,
      },
      {
        date: '2023-05-30T22:44:06.000Z',
        productId: 2,
        quantity: 10,
      },
    ]);
    sinon.stub(deleteSaleModel, 'deleteSale').resolves(undefined);
    const result = await deleteSaleService.deleteSale(1);
    expect(result).to.be.deep.equal(undefined);
  });
});