const express = require('express');
const salesMiddleware = require('./salesMiddleware');

const router = express.Router();

router.post('/sales', salesMiddleware, (req, res) => {
  const product = req.body;

  res.status(201).json({ message: 'Venda cadastrada com sucesso!'})
  console.log(product);
});

module.exports = router;