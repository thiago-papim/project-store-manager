const connection = require('./connection');

const getProductName = async (name) => {
  const [result] = await connection.execute(`SELECT * FROM StoreManager.products
  WHERE name LIKE ?`, [`%${name}%`]);
  return result;
};

module.exports = {
  getProductName,
};