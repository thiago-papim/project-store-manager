const insertSaleModel = require('../models/insertSaleModel');
// const productListModel = require('../models/productListModel');
// const productListController = require('../controllers/productListController');
// const productListService = require('./productListServices');

const insertSale = async (arrSales) => {
  // const productId = arrSales.map(async (e) => productListService.getById(e.productId));
  // const resolvidas = await Promise.all(productId);
  // if (resolvidas.length !== productId.length) {
  //   return { message: 'Product not found' };
  // }
  const result = await insertSaleModel.insertSale(arrSales);
  return result;
};

module.exports = {
  insertSale,
};