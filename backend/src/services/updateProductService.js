const updateProductsModel = require('../models/updateProductModel');
const productListModel = require('../models/productListModel');

const update = async (id, name) => {
  if (name.length < 5) {
    return {
      type: 'error length',
      message: { message: '"name" length must be at least 5 characters long' },
    };
  }
  const result = await productListModel.getById(id);
  if (!result) {
    return {
      type: 'error not found',
      message: { message: 'Product not found' },
    };
  }
  await updateProductsModel.update(id, name);
  return { id, name };
};

module.exports = {
  update,
};