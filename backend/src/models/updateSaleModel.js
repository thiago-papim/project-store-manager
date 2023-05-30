const connection = require('./connection');

const updateSale = async (quantity, saleId, productId) => {
  await connection.execute(`UPDATE StoreManager.sales_products
  SET StoreManager.sales_products.quantity = ?
  WHERE StoreManager.sales_products.sale_id = ?
  AND StoreManager.sales_products.product_id = ?;`, [quantity, saleId, productId]);
};

module.exports = {
  updateSale,
};