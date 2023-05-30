const updateProductService = require('../services/updateProductService');

const update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const result = await updateProductService.update(Number(id), name);
  if (result.type === 'error length') {
    return res.status(422).json(result.message);
  }
  if (result.type === 'error not found') {
    return res.status(404).json(result.message);
  }
  res.status(200).json(result);
};

module.exports = {
  update,
};