const salesListService = require('../services/salesListService');

const getAll = async (req, res) => {
  const result = await salesListService.getAll();
  res.status(200).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await salesListService.getById(Number(id));
  if (result.type) {
    res.status(404).json({ message: 'Sale not found' });
  }
  res.status(200).json(result.message);
};

module.exports = {
  getAll,
  getById,
};