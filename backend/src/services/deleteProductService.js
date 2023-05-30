const deleteProductModel = require('../models/deleteProductModel');
const productListModel = require('../models/productListModel');

const deleteProduct = async (id) => {
  const result = await productListModel.getById(id);
  if (!result) {
    return {
      type: 'error not found',
      message: { message: 'Product not found' },
    };
  }
  await deleteProductModel.deleteProduct(id);
};

module.exports = {
  deleteProduct,
};