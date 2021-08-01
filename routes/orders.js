const fs = require('fs');
const path = require('path');
const ORDER_DATA_FILE = path.join(__dirname, '../server-order-data.json');

module.exports = (app) => {

  app.get('/orders', (req, res) => {
    fs.readFile(ORDER_DATA_FILE, (err, data) => {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(JSON.parse(data));
    });
  });

}
