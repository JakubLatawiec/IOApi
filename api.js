var config = require('./dbconfig');
const sql = require('mssql');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request, response, next) => {
    console.log('middleware');
    next();
  });

  router.route('/orders').get(async (request, response) => {
    let pool = await sql.connect(config);
    let products = await pool.request().query("SELECT * FROM Movies");
    response.json(products.recordset);
    console.log("chuj");
  })


var port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is runnning at ' + port);