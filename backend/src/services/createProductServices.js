const createProductModel = require('../models/createProductModel');

const create = async (name) => {
  const result = await createProductModel.create(name);
  return result;
};

module.exports = {
  create,
};