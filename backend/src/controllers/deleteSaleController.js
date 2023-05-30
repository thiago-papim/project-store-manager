const deleteSaleService = require('../services/deleteSaleService');

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const result = await deleteSaleService.deleteSale(Number(id));
  console.log(result);
  if (result) {
    return res.status(404).json(result.message);
  }
  return res.status(204).end();
};

module.exports = {
  deleteProduct,
};