const Joi = require('joi');
const throwError = require('./utils');
const cepModel = require('../models/cepModel');

function isValid(cep) {
  const regex = /^[0-9]{5}-[0-9]{3}$/;
  if (!regex.test(cep)) {
    throwError('invalidData', 'CEP inválido!');
  }
  return true;
}

async function exists(cep) {
  const exist = await cepModel.exists(cep);

  if (!exist) {
    throwError('notFound', 'CEP não encontrado');
  }
  // return true;
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
    uf: Joi.string().min(2).max(2).required(),
  });

  const result = schema.validate(newCep);
  if (result.error) {
    throwError('invalidData', result.error.message);
  }

  return false;
}

async function alreadyExists(cep) {
  const exist = await cepModel.exists(cep);

  if (exist) {
    throwError('alreadyExists', 'CEP já existente');
  }

  return !!exist;
}

async function create(newCep) {
  const data = await cepModel.create(newCep);
  return data;
}

module.exports = {
  isValid,
  exists,
  get,
  validateNewCep,
  alreadyExists,
  create,
};
