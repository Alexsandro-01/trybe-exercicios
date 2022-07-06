const express = require('express');
const salesRouter = require('./salesRouter')

const app = express();
app.use(express.json());

app.get('/open',(req, res) => {
  res.status(200).json({ message: 'Tô online hein!' });
});

app.use('/', salesRouter);

app.listen(2000, () => {
  console.log('Aplication listen at port 2000');
})