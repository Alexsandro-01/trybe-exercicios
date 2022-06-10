const express = require('express');

const app = express(); // 1
const bodyParser = require('body-parser');


app.use(bodyParser.json()); // para usar body na requisição

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

function orderDrinks() {
  const ordernedDrinks = drinks.sort((a,b) => {
    return a.name.localeCompare(b.name); // ordenando com caracteres especiais
  });

  return ordernedDrinks;
}

function handRecipes(req, res) {
  // res.status(200).send('As pessoas são estranhas!'); // 4
  const { id } = req.params;
  const recipe = recipes.find((value) => value.id === Number(id));

  if (!recipe) return res.status(400).json({ message: 'Recipe not found!'});
  
  res.status(200).json(recipe);
}

// =============== Query strings
app.get('/recipes/search', (req,res) => {
  const { name, maxPrice } = req.query;
  const filteredRecipe = recipes.filter((value) => value.name.includes(name) && value.price < Number(maxPrice));

  if (!filteredRecipe) return res.status(400).json({ message: 'Recipe not found!'});

  res.status(200).json(filteredRecipe);
})

app.get('/drinks/search', (req, res) => {
  const { name } = req.query;
  const filteredDrink = drinks.filter((value) => value.name.includes(name));

  if (!filteredDrink) return res.status(400).json({ message: 'Drink not found' });

  res.status(200).json(filteredDrink);
})
//==================

app.get('/recipes/:id', handRecipes); // 2

app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drink = orderDrinks().find((value) => value.id === Number(id));

  res.json(drink);
}); // 2

app.get('/recipes', (req, res) => {
  res.status(200).json(recipes);
});

app.get('/drinks', (req, res) => {
  res.status(200).json(orderDrinks());
})

// ================= Método POST

app.post('/recipes', (req, res) => {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price });

  res.status(201).json({ message: 'Recipe created successfuly!'});
});

// ===========================

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); // 3
