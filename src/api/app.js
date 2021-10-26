const express = require('express');
const bodyParser = require('body-parser');
const shipperController = require('../controllers/shipperController');

const app = express();
app.use(bodyParser.json());

app.post('/shipper', shipperController.createShipper);

module.exports = app;
