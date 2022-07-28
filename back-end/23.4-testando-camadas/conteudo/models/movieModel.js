const connection = require('./connection');

const create = async ({ title, directedBy, releaseYear }) => {
  const [result] = await connection.query(
    'insert into movies (title, directed_by, release_year) values(?, ?, ?)', [title, directedBy, releaseYear]
  );

  return {
    id: result.insertId,
  };
};

module.exports = {
  create,
};