const express = require('express');
const bodyParser = require('body-parser');
const shipperController = require('../controllers/shipperController');
const transporterController = require('../controllers/transporterController');
const offerController = require('../controllers/offerController');
const offerTransportController = require('../controllers/offerTransportController');

const app = express();
app.use(bodyParser.json());

app.post('/shipper', shipperController.createShipper);
app.get('/shippers', shipperController.getShippers);
app.post('/transporter', transporterController.createTransporter);
app.get('/transporters', transporterController.getTransporters);
app.post('/offer', offerController.createOffer);
app.get('/offers', offerController.getOffers);
app.post('/offertransport', offerTransportController.createOfferTransporter);
app.get('/offertransports', offerTransportController.getOfferTransports);

module.exports = app;
