const createProductService = require('../services/createProductServices');

const create = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const result = await createProductService.create(name);
  if (result.type) {
    return res.status(422).json({ message: result.message });
  }
  result.message[0][0].name = name;
  res.status(201).json(result.message[0][0]);
};

module.exports = {
  create,
};