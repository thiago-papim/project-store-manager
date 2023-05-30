const express = require('express');
const productListController = require('./controllers/productListController');
const salesListController = require('./controllers/salesListController');
const createProductController = require('./controllers/createProductController');
const updateProductsController = require('./controllers/updateProductController');
const deleteProductController = require('./controllers/deleteProductController');
const insertSaleController = require('./controllers/insertSaleController');

const app = express();

app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.json({ status: 'Store Manager UP!' });
});

app.get('/products', productListController.getAll);

app.get('/products/:id', productListController.getById);

app.get('/sales', salesListController.getAll);

app.get('/sales/:id', salesListController.getById);

app.post('/products', createProductController.create);

app.put('/products/:id', updateProductsController.update);

app.delete('/products/:id', deleteProductController.deleteProduct);

app.post('/sales', insertSaleController.insertSale);

module.exports = app;
