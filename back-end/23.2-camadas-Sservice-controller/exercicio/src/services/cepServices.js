const throwError = require('./utils');
const cepModel = require('../models/cepModel');

function isValid(cep) {
  const regex = /^[0-9]{5}-[0-9]{3}$/;
  if (!regex.test(cep)) {
    return throwError('invalidData', 'CEP inválido!');
  }
  return true;
}

async function exists(cep) {
  const exist = await cepModel.exists(cep);

  if (!exist) {
    return throwError('notFound', 'CEP não encontrado');
  }
  return true;
}

async function get(cep) {
  const data = await cepModel.get(cep);
  return data;
}

module.exports = {
  isValid,
  exists,
  get,
};
