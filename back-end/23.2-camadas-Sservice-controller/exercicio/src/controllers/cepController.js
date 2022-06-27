const cepServices = require('../services/cepServices');

async function get(req, res) {
  const { cep } = req.params;

  cepServices.isValid(cep);
  // if (valid.error) next(valid.error);

  await cepServices.exists(cep);
  // if (exists.error) next(exists.error);

  const data = await cepServices.get(cep);
  res.status(200).json(data);
}

async function create(req, res) {
  const newCep = req.body;
  
  // validar se está no formato
  cepServices.validateNewCep(newCep);
  
  // checa se já existe no bd
  const exist = await cepServices.alreadyExists(newCep.cep);

  // se não existe, cria
  if (!exist) {
    const data = await cepServices.create(newCep);

    if (data.affectedRows === 1) {
      const cep = await cepServices.get(newCep.cep);
      res.status(201).json(cep);
    }
  }
}

module.exports = {
  get,
  create,
};
