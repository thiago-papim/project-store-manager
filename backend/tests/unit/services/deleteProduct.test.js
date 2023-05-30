// const chai = require('chai');
// const sinon = require('sinon');

// const { expect } = chai;

// // const productListService = require('../../../src/services/productListServices');
// const deleteProductService = require('../../../src/services/deleteProductService');
// // const productListModel = require('../../../src/models/productListModel');
// const deleteProductModel = require('../../../src/models/deleteProductModel');
// const allProducts = require('../../mocks/allProducts');

// describe('Testando delete', function () {
//   afterEach(function () {
//     sinon.restore();
//   });

//   it('Deletando com Id inexistente', async function () {
//     // sinon.stub(deleteProductModel, 'deleteProduct').resolves(undefined);
//     // const result = await deleteProductService.deleteProduct(22222);
//     // expect(result).to.be.deep.equal({ type: 'Error' });
//   });
//   it('Id existente', async function () {
//     sinon.stub(deleteProductModel, 'deleteProduct').resolves(undefined);
//     const result = await deleteProductService.deleteProduct(1);
//     expect(result).to.be.deep.equal({ type: '', message: allProducts[0] });
//   });
// });