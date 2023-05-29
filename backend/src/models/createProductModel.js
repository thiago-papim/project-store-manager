const connection = require('./connection');

const create = async (name) => {
  await connection.execute('INSERT INTO StoreManager.products (name) VALUES (?)', [name]);
  const result = connection.execute('SELECT COUNT(*) AS id FROM StoreManager.products');
  return result;
};

module.exports = {
  create,
};