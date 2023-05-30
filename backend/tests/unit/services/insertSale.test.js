const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const objInsertSale = require('./mocks/objInsertSale');
const insertSaleService = require('../../../src/services/insertSaleService');
const insertSaleModel = require('../../../src/models/insertSaleModel');
const productListService = require('../../../src/services/productListServices');

describe('Testando insertSale', function () {
  beforeEach(function () {
    sinon.restore();
  });
  it('Testando insert correto', async function () {
    sinon.stub(insertSaleModel, 'insertSale').resolves(objInsertSale.objInsert);
    sinon.stub(productListService, 'getById').resolves({
      id: 1,
      name: 'Martelo de Thor',
    });
    const result = await insertSaleService.insertSale(objInsertSale.arrSales);
    expect(result).to.be.deep.equal(objInsertSale.objInsert);
  });
  it('Testando insert incorreto', async function () {
    sinon.stub(insertSaleModel, 'insertSale').resolves(objInsertSale.objInsert);
    sinon.stub(productListService, 'getById').resolves({
      type: 'Error',
    });
    const result = await insertSaleService.insertSale(objInsertSale.arrSales);
    expect(result).to.be.deep.equal({ message: 'Product not found' });
  });
});