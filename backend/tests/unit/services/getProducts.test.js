const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const productListService = require('../../../src/services/productListServices');
const productListModel = require('../../../src/models/productListModel');
const allProducts = require('../../mocks/allProducts');

describe('Testando busca de produtos', function () {
  it('Testando getAll', async function () {
    sinon.stub(productListModel, 'getAll').resolves(allProducts);
    const result = await productListService.getAll();
    expect(result).to.be.deep.equal(allProducts);
  });
  describe('Testando getById', function () {
    afterEach(function () {
      sinon.restore();
    });

    it('Id inexistente', async function () {
      sinon.stub(productListModel, 'getById').resolves(undefined);
      const result = await productListService.getById(22222);
      expect(result).to.be.deep.equal({ type: 'Error' });
    });
    it('Id existente', async function () {
      sinon.stub(productListModel, 'getById').resolves(allProducts[0]);
      const result = await productListService.getById(1);
      expect(result).to.be.deep.equal({ type: '', message: allProducts[0] });
    });
  });
});