const express = require('express');
const productListController = require('./controllers/productListController');
const salesListController = require('./controllers/salesListController');
const createProductController = require('./controllers/createProductController');

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

module.exports = app;
