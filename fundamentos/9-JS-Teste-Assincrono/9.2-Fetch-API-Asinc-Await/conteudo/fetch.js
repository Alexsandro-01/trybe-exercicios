const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  const result = await fetch(url)
    .then((response) => response.json()) // pega o JSON da resposta
    .then((data) => data.value) // imprime o valor
    .catch((error) => `Algo deu errado : ${error}`); // trata erro

    console.log(result);

    // com try catch
    /* try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.value);
    } catch (error) {
      console.log(`Algo deu errado : ${error}`); // trata erro
    } */
}

fetchJoke();