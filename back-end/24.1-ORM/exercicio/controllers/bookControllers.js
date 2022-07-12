const bookServices = require('../services/bookServices');

async function create(req, res) {
  const data = req.body;

  const response = await bookServices.create(data);

  res.status(200).json(response);
}

module.exports = {
  create,
}