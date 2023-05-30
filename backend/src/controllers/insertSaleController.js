const insertSaleService = require('../services/insertSaleService');
const arrValidation = require('./validation/validationArr');

const insertSale = async (req, res) => {
  const arrSales = req.body;
  const productValidation = await arrValidation(arrSales, 'productId');
  const quantityValidation = await arrValidation(arrSales, 'quantity');
  if (!productValidation) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  if (!quantityValidation) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  const result = await insertSaleService.insertSale(arrSales);
  return res.status(201).json(result);
};

module.exports = {
  insertSale,
};