const productListServices = require('../services/productListServices');

const getAll = async (req, res) => {
  const result = await productListServices.getAll();
  res.status(200).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await productListServices.getById(Number(id));
  if (result.type) {
    res.status(404).json({ message: 'Product not found' });
  }
  res.status(200).json(result.message);
};

module.exports = {
  getAll,
  getById,
};