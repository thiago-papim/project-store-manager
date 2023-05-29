const salesListModel = require('../models/salesListModel');

const getAll = async () => {
  const result = await salesListModel.getAll();
  return result;
};

const getById = async (id) => {
  const result = await salesListModel.getById(id);
  if (result.length === 0) return { type: 'Error' };
  return { type: '', message: result };
};

module.exports = {
  getAll,
  getById,
};