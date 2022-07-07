const express = require('express');
const router = require('./controllers/userControllers');
const app = express();

app.use(express.json());

app.use('/', router);

app.listen('3000', () => {
  console.log('Listen at port 3000');
})