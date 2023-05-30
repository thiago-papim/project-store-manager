const connection = require('./connection');

const update = async (id, name) => {
  await connection.execute(`UPDATE StoreManager.products
  SET name = ?
  WHERE id = ?;`, [name, id]);
};

module.exports = {
  update,
};