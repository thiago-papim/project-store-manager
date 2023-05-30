const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const salesListService = require('../../../src/services/salesListService');
const salesListModel = require('../../../src/models/salesListModel');
const allSales = require('../../mocks/allSales');
const salesIdOne = require('../../mocks/salesIdOne');

describe('Testando busca de produtos', function () {
  it('Testando getAll', async function () {
    sinon.stub(salesListModel, 'getAll').resolves(allSales);
    const result = await salesListService.getAll();
    expect(result).to.be.deep.equal(allSales);
  });
  describe('Testando getById', function () {
    afterEach(function () {
      sinon.restore();
    });

    it('Id inexistente', async function () {
      sinon.stub(salesListModel, 'getById').resolves([]);
      const result = await salesListService.getById(22222);
      expect(result).to.be.deep.equal({ type: 'Error' });
    });
    it('Id existente', async function () {
      sinon.stub(salesListModel, 'getById').resolves(salesIdOne);
      const result = await salesListService.getById(1);
      expect(result).to.be.deep.equal({ type: '', message: salesIdOne });
    });
  });
});