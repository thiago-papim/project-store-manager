const productListModel = require('../models/productListModel');

const getAll = async () => {
  const result = await productListModel.getAll();
  return result;
};

const getById = async (id) => {
  const result = await productListModel.getById(id);
  if (!result) return { type: 'Error' };
  return { type: '', message: result };
};

module.exports = {
  getAll,
  getById,
};