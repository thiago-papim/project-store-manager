const insertSaleModel = require('../models/insertSaleModel');

const insertSale = async (arrSales) => {
  const result = await insertSaleModel.insertSale(arrSales);
  return result;
};

module.exports = {
  insertSale,
};