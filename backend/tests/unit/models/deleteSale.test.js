const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const connection = require('../../../src/models/connection');
const deleteSaleModel = require('../../../src/models/deleteSaleModel');

describe('Deletando sale', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('Testando delete com id invalido', async function () {
    sinon.stub(connection, 'execute').resolves([]);
    const result = await deleteSaleModel.deleteSale(99999);
    expect(result).to.be.deep.equal(undefined);
  });
});