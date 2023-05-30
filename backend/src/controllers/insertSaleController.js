const insertSaleService = require('../services/insertSaleService');
const validationArr = require('./validation/validationArr');

const insertSale = async (req, res) => {
  const arrSales = req.body;
  const validation = await validationArr.arrValidation(arrSales, ['productId', 'quantity']);
  const numberQuantity = await validationArr.numberValidation(arrSales);
  if (validation.type === 'error') {
    return res.status(400).json(validation.message);
  }
  if (numberQuantity.type === 'error') {
    return res.status(422).json(numberQuantity.message);
  }
  const result = await insertSaleService.insertSale(arrSales);
  if (result.message) {
    return res.status(404).json(result);
  }
  return res.status(201).json(result);
};

module.exports = {
  insertSale,
};