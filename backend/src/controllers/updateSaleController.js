const updateSaleService = require('../services/updateSaleService');

const updateSale = async (req, res) => {
  const { saleId, productId } = req.params;
  const { quantity } = req.body;
  const validationQuantity = Object.keys(req.body).some((e) => e === 'quantity');
  if (!validationQuantity) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  const numberQuantity = Object.values(req.body)
    .some((e) => typeof e === 'number' && e > 0);
  if (!numberQuantity) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  const result = await updateSaleService.updateSale(quantity, Number(saleId), Number(productId));
  if (result[0].type === 'Error') {
    return res.status(404).json(result[0].message);
  }
  const date = result[1];
  res.status(200).json({ saleId: Number(saleId), productId: Number(productId), quantity, date });
};

module.exports = {
  updateSale,
};