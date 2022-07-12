const Redux = require('redux');

// Primeiro vamos criar e retornar a nossa store :
/* const store = Redux.createStore(); */

// Uma store só funciona se passarmos uma função que será responsável por alterar os dados
// dela: o reducer . O reducer recebe como primeiro parâmetro um state, sendo que seu retorno
// substituirá o state da store . Para fins didáticos, iremos montar o reducer no mesmo arquivo,
// mas a boa prática é fazer em um arquivo separado.

// Inicialmente o state vem como undefined , e não queremos isto. Então iremos atribuir a ele um valor padrão.
const ESTADO_INICIAL = {
  login: false,
  email: '',
}

/* 
    const reducer = (state = ESTADO_INICIAL) => {
      return state;
    };
    const store = Redux.createStore(reducer); 
*/

// Nosso reducer está montado e possui o nosso estado inicial da aplicação.
// Vamos verificar o output quando acessamos a store com a função getState() 

/* 
    console.log(store.getState());
*/


/*
  Mas e se precisarmos alterar o dado que está no estado? A peça que tem esta função é a action !
  Uma action é um objeto JavaScript que tem pelo menos uma propriedade type e é responsável por
  comunicar ao reducer uma mudança a ser feita na store . 
*/

const fazerLogin = (email) => ({
  type: "LOGIN",
  email,
})

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default:
      return state;
  }
}

const store = Redux.createStore(reducer);
store.dispatch(fazerLogin('alguem@email.com'));
console.log(store.getState());