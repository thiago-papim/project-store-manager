const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute(`SELECT vendas.id AS saleId,
  vendas.date,
  vendasP.product_id AS productId,
  vendasP.quantity AS quantity
  FROM StoreManager.sales AS vendas
  INNER JOIN StoreManager.sales_products AS vendasP
  ON vendas.id = vendasP.sale_id
  ORDER BY vendasP.sale_id, vendasP.product_id`);
  return result;
};

const getById = async (id) => {
  const [result] = await connection.execute(`SELECT vendas.date,
  vendasP.product_id AS productId,
  vendasP.quantity AS quantity
  FROM StoreManager.sales AS vendas
  INNER JOIN StoreManager.sales_products AS vendasP
  ON vendas.id = vendasP.sale_id
  WHERE sale_id = ?
  ORDER BY vendasP.sale_id, vendasP.product_id;`, [id]);
  return result;
};

module.exports = {
  getAll,
  getById,
};