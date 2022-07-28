const { Book } = require('../models');
async function create(newBook) {
  const { title, author, pageQuantity } = newBook;

  const response =  await Book.create({ title, author, pageQuantity });

  return response;
}

module.exports = {
  create,
}