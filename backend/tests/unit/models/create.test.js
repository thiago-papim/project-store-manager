const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const connection = require('../../../src/models/connection');
const createProductModel = require('../../../src/models/createProductModel');

describe('Testando criação de produtos', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('Testando create', async function () {
    sinon.stub(connection, 'execute').resolves(4);
    const result = await createProductModel.create('Produto Teste');
    expect(result).to.be.deep.equal(4);
  });
});