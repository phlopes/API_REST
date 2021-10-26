const express = require('express');
const bodyParser = require('body-parser');
const shipperController = require('../controllers/shipperController');
const transporterController = require('../controllers/transporterController');

const app = express();
app.use(bodyParser.json());

app.post('/shipper', shipperController.createShipper);
app.get('/shipper', shipperController.getShippers);
app.post('/transporter', transporterController.createTransporter);

module.exports = app;
