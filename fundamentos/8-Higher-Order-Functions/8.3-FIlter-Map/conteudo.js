// Considere que você possui duas listas: o preço do primeiro produto ( Arroz ) é o primeiro elemento da lista prices ( 2.99 ), e assim por diante:
// Deseja-se juntá-las em apenas uma lista de objetos que fique dessa forma:
// const listProducts = [{ Arroz: 2.99 },...]

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (product, price) => product.map( (value, index) => ({[value]: price[index]}) );

const listProducts = updateProducts(products, prices);

console.log(listProducts);