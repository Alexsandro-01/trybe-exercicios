const throwError = require('./utils');

function get(req, res) {
  const { cep } = req.params;

  const regex = /^[0-9]{5}-[0-9]{3}$/;
  if (!regex.test(cep)) {
    throwError('invalidData', 'CEP inválido!');
  }

  // ajustar para condultar o bd
  res.status(200).json({ message: 'ok' });
}

module.exports = {
  get,
};
