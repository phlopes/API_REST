const { getTransporterById } = require('../models/transporterModel');
const { getOfferById } = require('../models/offerModel');


const requiredField = (param) => {
  if (param === undefined || param.length <= 0) return true;
};

const checkTransporter = async (id) => {
  const transporter = await getTransporterById(id);
  if (!transporter) return true;
};

const checkOffer = async (id) => {
  const offer = await getOfferById(id);
  if (!offer) return true;
};


const status = {
  code400: 400,
  code404: 404,
};

const message = {
  ID_REQUIRED: '"id_transporter" is required',
  ID_OFFER_REQUIRED: '"id_offer" is required',
  VALUE_REQUIRED: '"value" is required',
  AMOUNT_REQUIRED: '"amount" is required',
  TRANSPORTER_NOT_EXIST: '"transporter" is not registered with the bank',
  OFFER_NOT_EXIST: '"offer" is not registered with the bank',
};

const validationFields = async (id_transporter, id_offer, value, amount) => {
  const { code400, code404 } = status;
  const { ID_REQUIRED, ID_OFFER_REQUIRED, VALUE_REQUIRED, AMOUNT_REQUIRED, TRANSPORTER_NOT_EXIST, OFFER_NOT_EXIST } = message;

  switch (true) {
    case requiredField(id_transporter): return { code: code400, message: ID_REQUIRED };
    case requiredField(id_offer): return { code: code400, message: ID_OFFER_REQUIRED };
    case requiredField(value): return { code: code400, message: VALUE_REQUIRED };
    case requiredField(amount): return { code: code400, message: AMOUNT_REQUIRED };
    case (await checkTransporter(id_transporter)): return { code: code404, message: TRANSPORTER_NOT_EXIST };
    case (await checkOffer(id_offer)): return { code: code404, message: OFFER_NOT_EXIST };
    default: return {};
  }
};

module.exports = {
  validationFields
};