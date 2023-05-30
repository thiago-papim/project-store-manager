const connection = require('./connection');

const createSale = async (sale, saleQuantity) => {
  await connection.execute(`
  INSERT INTO StoreManager.sales_products (
    sale_id, product_id, quantity) VALUES (?, ?, ?);`, [saleQuantity
    .total, sale.productId, sale.quantity]);
};

const insertSale = async (arrSales) => {
  await connection.execute('INSERT INTO StoreManager.sales (date) VALUE(DEFAULT);');
  const [salesQuantity] = await connection
    .execute('SELECT COUNT(*) AS total FROM StoreManager.sales;');
  const arrPromisses = arrSales.map((sale) => createSale(sale, salesQuantity[0]));
  await Promise.all(arrPromisses);
  return { id: salesQuantity[0].total, itemsSold: arrSales };
};

module.exports = {
  insertSale,
};