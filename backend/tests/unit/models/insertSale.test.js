// const chai = require('chai');
// const sinon = require('sinon');

// const { expect } = chai;

// const connection = require('../../../src/models/connection');
// const insertSaleModel = require('../../../src/models/insertSaleModel');

// describe('Testando insertSale', function () {
//   afterEach(function () {
//     sinon.restore();
//   });
//   it('Testando insertSale', async function () {
//     sinon.stub(connection, 'execute')
//       .resolves([{ insertId: 3 }]).resolves([{ total: 3 }]).resolves({ total: 3 });
//     const result = await insertSaleModel.insertSale([
//       {
//         productId: 2,
//         quantity: 1,
//       },
//       {
//         productId: 2,
//         quantity: 15,
//       },
//     ]);
//     expect(result).to.be.deep.equal(4);
//   });
// });