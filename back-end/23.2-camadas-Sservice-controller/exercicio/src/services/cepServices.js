const Joi = require('joi');
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

function validateNewCep(newCep) {
  // console.log(newCep);
  const schema = Joi.object({
    cep: Joi.string().pattern(new RegExp(/^[0-9]{5}-[0-9]{3}$/)),
    logradouro: Joi.string().required(),
    bairro: Joi.string().required(),
    localidade: Joi.string().required(),
    uf: Joi.string().max(2).required(),
  });

  const result = schema.validate(newCep);
  if (result.error) {
    return throwError('invalidData', result.error.message);
  }

  return false;
}

module.exports = {
  isValid,
  exists,
  get,
  validateNewCep,
};
