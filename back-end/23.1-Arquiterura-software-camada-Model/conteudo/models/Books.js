const connection = require('./connection');

async function getAllBooks() {
  const [books] = await connection.execute(
    `select title from books`
  );

  return books;
}

async function getByAuthorId(authorId) {
  const [books] = await connection.execute(
    `select title from books where author_id = ?`, [authorId]
  );
  
  if (books.length === 0) return null;
  
  return books;
}

async function isValidBook(title, authorId) {
  const [authorsId] = await connection.execute(
    'select id from authors'
  );

  if (!authorsId.includes(Number(authorId))) {
    return null;
  }

  if (!title || title.length < 3) {
    return null;
  }

  return true;
}

async function createNewBook(title, authorId) {
  connection.execute(
    'insert into books(title, author_id) values(?, ?)', [title, authorId]
  );
}

module.exports = {
  getAllBooks,
  getByAuthorId,
  isValidBook,
  createNewBook
}