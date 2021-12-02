let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
console.log('Boas vindas, ' + info.personagem)

console.log()
console.log('/*-------------------------------------------*/')
console.log()

info.recorrente = 'Sim'
console.log(info)

console.log()
console.log('/*-------------------------------------------*/')
console.log()

for( let key in info) {
  console.log(key)
}

console.log()
console.log('/*-------------------------------------------*/')
console.log()

for(let key2 in info) {
  console.log(info[key2])
}

console.log()
console.log('/*-------------------------------------------*/')
console.log()

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for(let key3 in info){
  if(info[key3] === info2[key3]) {
    console.log('Ambos são recorrentes')
  }
  else {
    console.log(info[key3] + ' e ' + info2[key3])
  }
}

console.log()
console.log('/*-------------------------------------------*/')
console.log()

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo)

console.log()
console.log('/*-------------------------------------------*/')
console.log()

/* let word = 'joaoFernando'
let ending = 'nando'

let a = word.split('')
let b = ending.split('')
let test1 = []
let test2 = []


for(let j = a.length - 1; j >= ((a.length -1) - (b.length -1)); j -= 1) {

  test1 += a[j]
  test2 += b[j]

  
}
console.log(test1)
console.log(test1) */

function compare(palavra, fim) {
  let a = palavra.split('')
  let b = fim.split('')
  let test = 0


  for(let j = 1; j < a.length; j += 1) {

    if(a[a.length - j] === b[b.length - j]) {
      test += 1
    }

  }

  if(test == b.length) {
    return true
  }
  else {
    return false
  }
  //console.log(test)

}

console.log(compare('alexsandro', 'sandro'))
//compare('alexsandro', 'sandro')

