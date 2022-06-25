const express = require('express');
require('express-async-error');
const Cep = require('./services/cepServices');

const api = express();
const PORT = '3000';

api.get('/cep/:cep', Cep.get);

api.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong!' });
});

api.use((err, _req, res, _next) => {
  const { code, message } = err;

  switch (code) {
    case 'invalidData':
      res.status(400).json({ error: { code, message } });
      break;
      
    default:
      res.sendStatus(400);
      break;
  }
});

api.listen(PORT, () => console.log(`Online at port ${PORT}`));