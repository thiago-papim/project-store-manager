const connection = require('./connection');

const deleteProduct = async (id) => {
  await connection.execute(`DELETE FROM StoreManager.products
  WHERE id = ?;`, [id]);
};

module.exports = {
  deleteProduct,
};