


const fs = require('fs');
const path = require('path');
const PRODUCT_DATA_FILE = path.join(__dirname, '../server-product-data.json');



module.exports = (app) => {


  app.get('/products', (req, res) => {
    fs.readFile(PRODUCT_DATA_FILE, (err, data) => {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(JSON.parse(data));
    });
  });

}
