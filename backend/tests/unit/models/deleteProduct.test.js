const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const connection = require('../../../src/models/connection');
const deleteProductmodel = require('../../../src/models/deleteProductModel');
const allProducts = require('../../mocks/allProducts');

describe('Deletando produto', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('Testando delete', async function () {
    sinon.stub(connection, 'execute').resolves(allProducts);
    const result = await deleteProductmodel.deleteProduct(1);
    expect(result).to.be.deep.equal(undefined);
  });
});