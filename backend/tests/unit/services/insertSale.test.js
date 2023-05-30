const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const objInsertSale = require('./mocks/objInsertSale');
const insertSaleService = require('../../../src/services/insertSaleService');
const insertSaleModel = require('../../../src/models/insertSaleModel');

describe('Testando busca de produtos', function () {
  it('Testando getAll', async function () {
    sinon.stub(insertSaleModel, 'insertSale').resolves(objInsertSale.objInsert);
    const result = await insertSaleService.insertSale(objInsertSale.arrSales);
    expect(result).to.be.deep.equal(objInsertSale.objInsert);
  });
});