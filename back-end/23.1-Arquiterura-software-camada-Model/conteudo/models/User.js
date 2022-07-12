const connection = require('./connection');

function errorModel(arg) {
  return {
    "error": true,
    "message": `O campo ${arg} é obrigatório`
  }
}


function isValidUser({ firstName, lastName, email, password }) {
  if (!firstName) {
    return errorModel('firstName');
  }

  if (!lastName) {
    return errorModel('lastName')
  }

  if (password.length < 6) {
    return {
      "error": true,
      "message": "O campo 'password' deve ter pelo menos 6 caracteres"
    }
  }

  if (!email) {
    return errorModel('email');
  }

  return {
    "error": false
  }
}

async function createUser({ firstName, lastName, email, password }) {
  const response = await connection.query(
    'insert into user(first_name, last_name, email, password) values (?, ?, ?, ?)', [firstName, lastName, email, password]
  );

  const [result] = response;

  const [[newUser]] = await connection.query(
    'select * from user where id = ?', [result.insertId]
  );
  
  return newUser;
}

module.exports = {
  isValidUser,
  createUser
}