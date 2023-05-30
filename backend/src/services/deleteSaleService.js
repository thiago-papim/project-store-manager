const deleteSaleModel = require('../models/deleteSaleModel');
const saleListModel = require('../models/salesListModel');

const deleteSale = async (id) => {
  const result = await saleListModel.getById(id);
  if (result.length === 0) {
    return {
      type: 'error not found',
      message: { message: 'Sale not found' },
    };
  }
  await deleteSaleModel.deleteSale(id);
};

module.exports = {
  deleteSale,
};