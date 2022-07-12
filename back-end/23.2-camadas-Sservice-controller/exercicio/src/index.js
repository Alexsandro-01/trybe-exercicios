const express = require('express');
require('express-async-errors');
const cepControllers = require('./controllers/cepController');

const api = express();
api.use(express.json());
const PORT = '3000';

api.get('/cep/:cep', cepControllers.get);

api.post('/cep', cepControllers.create);

api.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong!' });
});

api.use((err, _req, res, _next) => {
  const { code, message } = err;

  switch (code) {
    case 'invalidData':
      res.status(400).json({ error: { code, message } });
      break;
    case 'notFound':
      res.status(404).json({ error: { code, message } });
      break;
      
    default:
      res.sendStatus(400);
      break;
  }
});

api.listen(PORT, () => console.log(`Online at port ${PORT}`));