const cepServices = require('../services/cepServices');

async function get(req, res, next) {
  const { cep } = req.params;

  const valid = cepServices.isValid(cep);
  if (valid.error) next(valid.error);

  const exists = await cepServices.exists(cep);
  if (exists.error) next(exists.error);

  const data = await cepServices.get(cep);
  res.status(200).json(data);
}

module.exports = {
  get,
};
