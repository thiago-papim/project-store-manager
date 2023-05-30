const insertSaleModel = require('../models/insertSaleModel');
const productListService = require('./productListServices');

const insertSale = async (arrSales) => {
  const productId = arrSales.map(async (e) => productListService.getById(e.productId));
  const resolvidas = await Promise.all(productId);
  if (resolvidas.some((e) => e.type === 'Error')) {
    return { message: 'Product not found' };
  }
  const result = await insertSaleModel.insertSale(arrSales);
  return result;
};

module.exports = {
  insertSale,
};