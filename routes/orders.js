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

  app.post('/orders', (req, res)=>{
    console.log('\n\n**input order**\n\n', req.body);
    fs.readFile(ORDER_DATA_FILE, (err,data) => {
      const orders = JSON.parse(data);
      new_order = { id: orders.length + 1, ...req.body}
      orders.push(new_order)
      console.log('\n\n**orders after push **\n\n', orders);

      fs.writeFile(ORDER_DATA_FILE, JSON.stringify(orders,null,4),() => {
        res.setHeader('Cache-Control', 'no-cache');
        res.status(200)
      });
    });
  });

}
