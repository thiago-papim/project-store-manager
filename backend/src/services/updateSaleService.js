const salesListModel = require('../models/salesListModel');
const productListModel = require('../models/productListModel');
const updateSaleModel = require('../models/updateSaleModel');

const updateSale = async (quantity, saleId, productId) => {
    const resultSale = await salesListModel.getById(saleId);
    if (resultSale.length === 0) return { type: 'Error', message: { message: 'Sale not found' } };

    const resultProduct = await productListModel.getById(productId);
    if (!resultProduct) return { type: 'Error', message: { message: 'Product not found in sale' } };
    await updateSaleModel.updateSale(quantity, saleId, productId);
    return true;
};

module.exports = {
  updateSale,
};