const connection = require('./connection');

const deleteSale = async (id) => {
  await connection.execute(`DELETE FROM StoreManager.sales
  WHERE id = ?;`, [id]);
};

module.exports = {
  deleteSale,
};