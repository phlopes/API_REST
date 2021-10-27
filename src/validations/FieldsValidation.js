
const requiredField = (param) => {
  if (param === undefined || param.length <= 0) return true;
};

const status = {
  code400: 400,
};

const message = {
  NAME_REQUIRED: '"name" is required',
  DOC_REQUIRED: '"doc" is required',
  ABOUT_REQUIRED: '"about" is required',
  SITE_REQUIRED: '"site" is required',
};

const validationFields = (name, doc, about, site) => {
  const { code400 } = status;
  const { NAME_REQUIRED, DOC_REQUIRED, ABOUT_REQUIRED, SITE_REQUIRED } = message;
  switch (true) {
    case requiredField(name): return { code: code400, message: NAME_REQUIRED };
    case requiredField(doc): return { code: code400, message: DOC_REQUIRED };
    case requiredField(about): return { code: code400, message: ABOUT_REQUIRED };
    case requiredField(site): return { code: code400, message: SITE_REQUIRED };
    default: return {};
  }
};

module.exports = {
  validationFields,
};