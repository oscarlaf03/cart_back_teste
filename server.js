const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const path = require('path');

const app = express();
const cart_routes = require('./routes/cart');
const products_routes = require('./routes/products');
// const PRODUCT_DATA_FILE = path.join(__dirname, 'server-product-data.json');
// TODO remove after spit routes
// const CART_DATA_FILE = path.join(__dirname, 'server-cart-data.json');


app.set('port', (process.env.PORT || 3000));
app.use(express.json()) // To parse the incoming requests with JSON payloads
app.use(express.urlencoded({extended: true}));
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});


cart_routes(app);
products_routes(app);

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});
