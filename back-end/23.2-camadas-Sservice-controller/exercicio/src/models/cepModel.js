const connection = require('./connection');

async function exists(cep) {
  const query = 'select 1 from ceps where cep = ?';
  const [[exist]] = await connection.query(query, [cep]);
  return !!exist;
}

async function get(cep) {
  const query = 'select * from ceps where cep = ?';
  const [[data]] = await connection.query(query, [cep]);

  return data;
}

async function create(newCep) {
  const { cep, logradouro, bairro, localidade, uf } = newCep;
  const query = 'insert into ceps(cep, logradouro, bairro, localidade, uf) values(?, ?, ?, ?, ?)';

  const [data] = await connection.query(query, [cep, logradouro, bairro, localidade, uf]);

  return data;
}

module.exports = {
  exists,
  get,
  create,
};
