const createProductService = require('../services/createProductServices');

const create = async (req, res) => {
  const { name } = req.body;
  const [[result]] = await createProductService.create(name);
  result.name = name;
  res.status(201).json(result);
};

module.exports = {
  create,
};