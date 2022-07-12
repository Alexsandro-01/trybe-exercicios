const Joi = require('joi');
const userModel = require('../models/userModel');
const { throwNotFoundError } = require('./utils');

const userService = {
  /**
   * valida alguma coisa (no caso os parametros) e
   * retorna um objeto com o id como a aplicação precisa
   */
  async validateParamsId(unknown) {
    const schema = Joi.object({
      id: Joi.number().required().positive().integer(),
    });
    const result = await schema.validateAsync(unknown);
    return result;
  },

  /**
   * verifica se o id existe no banco na tabela user
   * caso contrário disparar um erro
   */
  async exists(id) {
    const exists = await userModel.exists(id);
    if (!exists) throwNotFoundError('"user" not found');
  },

  /**
   * pega um user no banco mesmo sem saber se existe ou não
   */
  async get(id) {
    const item = await userModel.get(id);
    return item;
  },
};

module.exports = userService;