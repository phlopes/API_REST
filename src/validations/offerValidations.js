const { getShipperById } = require('../models/shipperModel');

const requiredField = (param) => {
  if (param === undefined || param.length <= 0) return true;
};

const checkShipper = async (id) => {
  const shipper = await getShipperById(id);
  if (!shipper) return true;
};

const status = {
  code400: 400,
  code404: 404,
};

const message = {
  ID_REQUIRED: '"id_shipper" is required',
  FROM_REQUIRED: '"from" is required',
  TO_REQUIRED: '"to" is required',
  VALUE_REQUIRED: '"value" is required',
  AMOUNT_REQUIRED: '"amount" is required',
  TYPE_REQUIRED: '"amount_type" is required',
  SHIPPER_NOT_EXIST: '"shipper" is not registered with the bank'
};

const validationFields = async (id_shipper, from, to, initial_value, amount, amount_type) => {
  const { code400, code404 } = status;
  const { ID_REQUIRED, FROM_REQUIRED, TO_REQUIRED, VALUE_REQUIRED, AMOUNT_REQUIRED, TYPE_REQUIRED, SHIPPER_NOT_EXIST } = message;

  switch (true) {
    case requiredField(id_shipper): return { code: code400, message: ID_REQUIRED };
    case requiredField(from): return { code: code400, message: FROM_REQUIRED };
    case requiredField(to): return { code: code400, message: TO_REQUIRED };
    case requiredField(initial_value): return { code: code400, message: VALUE_REQUIRED };
    case requiredField(amount): return { code: code400, message: AMOUNT_REQUIRED };
    case requiredField(amount_type): return { code: code400, message: TYPE_REQUIRED };
    case (await checkShipper(id_shipper)): return { code: code404, message: SHIPPER_NOT_EXIST  }
    default: return {}
  }
};

module.exports = {
  validationFields
};