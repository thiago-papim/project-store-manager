const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const connection = require('../../../src/models/connection');
const getProductNameModel = require('../../../src/models/getProductNameModel');
const allProducts = require('../../mocks/allProducts');

describe('Testando busca por nome na query', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('Testando busca com nome correto', async function () {
    sinon.stub(connection, 'execute').resolves(allProducts);
    const result = await getProductNameModel.getProductName('Martelo');
    expect(result).to.be.deep.equal(
      {
        id: 1,
        name: 'Martelo de Thor',
      },
    );
  });
});