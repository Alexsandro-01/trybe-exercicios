const { Router } = require('express');
const userController = require('../controllers/userController');

const userRoutes = Router();

// removeUser
userRoutes.delete('/:id', async (req, res) => { });

// editUser
userRoutes.put('/:id', async (req, res) => { });

// getUser
/*
userRoutes.get('/:id', async (req, res) => {
  // validar o id
  const schema = Joi.object({
    id: Joi.number().required().positive().integer(),
  });
  const { id } = await schema.validateAsync(req.params);
  // verificar se existe no banco
  const existsSql = 'SELECT 1 FROM db.user WHERE id = ?';
  const [[exists]] = await db.query(existsSql, [id]);
  if (!exists) throwNotFoundError('"user" not found');
  // pegar o dado
  const getSql = 'SELECT * FROM db.user WHERE id = ?';
  const [[item]] = await db.query(getSql, [id]);
  // responder
  res.json(item);
});
*/
userRoutes.get('/:id', userController.get); // chamo o controller

// addUser

userRoutes.post('/', async (req, res) => { });

// listUsers
userRoutes.get('/', async (req, res) => { });

module.exports = userRoutes;