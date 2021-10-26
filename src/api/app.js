const express = require('express');
const bodyParser = require('body-parser');
const shipperController = require('../controllers/shipperController');
const transporterController = require('../controllers/transporterController');
const offController = require('../controllers/offerController');

const app = express();
app.use(bodyParser.json());

app.post('/shipper', shipperController.createShipper);
app.get('/shippers', shipperController.getShippers);
app.post('/transporter', transporterController.createTransporter);
app.get('/transporters', transporterController.getTransporters);
app.post('/offer', offController.createOffer);

module.exports = app;
