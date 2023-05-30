const connection = require('./connection');

const createSale = async (sale, saleQuantity) => {
  await connection.execute(`
  INSERT INTO StoreManager.sales_products (
    sale_id, product_id, quantity) VALUES (?, ?, ?);`, [saleQuantity
    .total, sale.productId, sale.quantity]);
    // console.log(create, 'chamada 3');
};

const insertSale = async (arrSales) => {
  await connection.execute('INSERT INTO StoreManager.sales (date) VALUE(DEFAULT);');
  // console.log(teste, 'chamada 1');
  const [salesQuantity] = await connection
    .execute('SELECT COUNT(*) AS total FROM StoreManager.sales;');
  console.log([salesQuantity]);
    // console.log(salesQuantity, 'chamada 2');
  const arrPromisses = arrSales.map((sale) => createSale(sale, salesQuantity[0]));
  const resultados = await Promise.all(arrPromisses);
  console.log(resultados);
  return { id: salesQuantity[0].total, itemsSold: arrSales };
};

module.exports = {
  insertSale,
  createSale,
};