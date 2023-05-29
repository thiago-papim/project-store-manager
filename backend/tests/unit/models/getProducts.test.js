const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const connection = require('../../../src/models/connection');
const productListModel = require('../../../src/models/productListModel');
const allProducts = require('../../mocks/allProducts');

describe('Testando busca de produtos', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('Testando getAll', async function () {
    sinon.stub(connection, 'execute').resolves([allProducts]);
    const result = await productListModel.getAll();
    expect(result).to.be.deep.equal(allProducts);
  });

  it('Testando getById', async function () {
    sinon.stub(connection, 'execute').resolves([[allProducts[0]]]);
    const result = await productListModel.getById(1);
    console.log(result);
    expect(result).to.be.deep.equal(allProducts[0]);
  });
});