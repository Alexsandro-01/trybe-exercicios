const express = require('express');
const Author = require('./models/Author');
const Books = require('./models/Books');
const User = require('./models/User');

const api = express();
api.use(express.json());
const PORT = 2000;

api.get('/books/:author_id', async (req, res) => {
  const { author_id } = req.params;
  const books = await Books.getByAuthorId(author_id);

  if (!books) {
    res.status(404).json({ message: 'Not found' });
    return;
  }

  res.status(200).json(books);
});

api.get('/authors', async (req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

api.post('/authors', async (req, res) => {
	const { first_name, middle_name, last_name } = req.body;

	if (!Author.isValid(first_name, middle_name, last_name)) {
		return res.status(400).json({ message: 'Dados inválidos' });
	}

	await Author.create(first_name, middle_name, last_name);

	res.status(201).json({ message: 'Autor criado com sucesso! '});
});

api.get('/books', async (req, res) => {
  const books = await Books.getAllBooks();

  res.status(200).json(books);
});

api.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  if (!Books.isValidBook(title, author_id)) {
    res.status(400).json({ message: 'Dados inválidos' });
    return;
  }

  await Books.createNewBook(title, author_id);
  res.status(201).json({ message: 'Dados criandos com sucesso!' });
})

api.post('/user', async (req, res) => {
  const data = req.body;
  const isValid = User.isValidUser(data);
  if(isValid.error) {
    res.json(isValid.message);
    return;
  }

  const newUser = await User.createUser(data);

  res.status(201).json(newUser);
})

api.listen(PORT, () => {
  console.log('Back end online at port 2000');
});
