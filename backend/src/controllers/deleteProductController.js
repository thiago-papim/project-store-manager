const deleteProductService = require('../services/deleteProductService');

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const result = await deleteProductService.deleteProduct(Number(id));
  if (result) {
    return res.status(404).json(result.message);
  }
  return res.status(204).end();
};

module.exports = {
  deleteProduct,
};