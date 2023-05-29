const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const connection = require('../../../src/models/connection');
const salesListModel = require('../../../src/models/salesListModel');
const allSales = require('../../mocks/allSales');
const salesIdOne = require('../../mocks/salesIdOne');

describe('Testando busca de produtos', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('Testando getAll', async function () {
    sinon.stub(connection, 'execute').resolves([allSales]);
    const result = await salesListModel.getAll();
    expect(result).to.be.deep.equal(allSales);
  });

  it('Testando getById', async function () {
    sinon.stub(connection, 'execute').resolves([salesIdOne[0]]);
    const result = await salesListModel.getById(1);
    console.log(result);
    expect(result).to.be.deep.equal(salesIdOne[0]);
  });
});