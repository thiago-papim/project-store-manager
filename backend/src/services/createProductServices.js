const createProductModel = require('../models/createProductModel');

const create = async (name) => {
  const result = await createProductModel.create(name);
  if (name.length < 5) {
    return {
      type: 'error',
      message: '"name" length must be at least 5 characters long',
    };
  }
  return {
    type: '',
    message: result,
  };
};

module.exports = {
  create,
};