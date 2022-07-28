const express = require('express');
const bookControllers = require('./controllers/bookControllers');
const PORT = '3000';

const app = express();

app.use(express.json());

app.post('/books', bookControllers.create);

app.get('/', (req, res) => {
  res.status(200).send('tamo on!');
});

app.listen(PORT, () => console.log(`online at port ${PORT}`));