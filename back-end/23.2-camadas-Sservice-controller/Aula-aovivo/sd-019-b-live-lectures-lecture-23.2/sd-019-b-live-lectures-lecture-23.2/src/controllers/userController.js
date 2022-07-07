const userService = require('../services/userService');

/**
 * O controller "controla" as regras de negócio, chamando as 
 * coisas no lugar certo
 */
const userController = {
  async get(req, res) {
    // validar o id
    const { id } = await userService.validateParamsId(req.params);
    // verificar se existe no banco
    await userService.exists(id);
    // pegar o dado
    const item = await userService.get(id);
    // responder
    res.json(item);
  },
};

module.exports = userController;