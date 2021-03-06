const selectEstate = document.querySelector('#estados')

const states = [
  'Selecione',
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceara',
  'Distrito Federal',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraima',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins'
  ]
  
  const state_nick = [
    '',
    'AC',
    'AL',	
    'AP',	
    'AM',	
    'BA',	
    'CE',	
    'DF',	
    'ES',	
    'GO',	
    'MA',	
    'MT',	
    'MS',	
    'MG',	
    'PA',	
    'PB',	
    'PR',	
    'PE',	
    'PI',	
    'RJ',	
    'RN',	
    'RS',	
    'RO',	
    'RR',	
    'SC',	
    'SP',	
    'SE',	
    'TO'	
  ]
  
  function makeOptionsSelect() { 
    for (let i = 0; i < states.length; i += 1) {
      let option = document.createElement('option')
      option.innerText = states[i]
      option.value = state_nick[i]
      selectEstate.appendChild(option)
    }
  }
  makeOptionsSelect()

// DatePickerX
document.getElementById('data-inicio').DatePickerX.init();

// JustValidate
// https://github.com/horprogs/Just-validate
const validate = new window.JustValidate('#form')

validate.addField('#nome', [
  {
    rule: 'maxLength',
    value: 40
  },
  {
    rule: 'required',
    errorMessage: 'O nome precisa ser preenchido!'
  }
])
.addField('#email', [
  {
    rule: 'maxLength',
    value: 50
  },
  {
    rule: 'required',
    errorMessage: 'O email precisa ser preenchido!'
  },
  {
    rule: 'email',
    errorMessage: 'Email inválido!!'
  }
])
.addField('#cpf', [
  {
    rule: 'maxLength',
    value: 14,
    errorMessage: 'Deve conter apenas 11 dígitos!'
  },
  {
    rule: 'required',
    errorMessage: 'O CPF precisa ser preenchido!'
  }
])
.addField('#endereco', [
  {
    rule: 'maxLength',
    value: 200
  },
  {
    rule: 'required',
    errorMessage: 'Endereço não preenchido!'
  }
])
.addField('#cidade', [
  {
    rule: 'maxLength',
    value: 28
  },
  {
    rule: 'required',
    errorMessage: 'A cidade precisa ser preenchida!'
  }
])
.addField('#estados', [
  {
    rule: 'required',
    errorMessage: 'O seu Estado precisa ser preenchido!'
  }
])
.addRequiredGroup('#radios', 'Você precisa selecionar uma opção')
.addField("#resumo", [
  {
    rule: 'required',
    errorMessage: 'Resumo não preenchido!'
  }
])
.addField('#cargo', [
  {
    rule: 'required',
    errorMessage: 'Cargo não preenchido!'
  }
])
.addField('#descricao-cargo', [
  {
    rule: 'required',
    errorMessage: 'Descrição do cargo não preenchida!'
  }
])
.addField('#data-inicio', [
  {
    rule: 'required',
    errorMessage: 'Data não preenchida!'
  }
]).onSuccess((e) => {
  console.log(document.querySelector('#form'))
})


/* const nome = document.querySelector('#nome')

console.log(nome)
const email = document.querySelector('#email')
const cpf = document.querySelector('#cpf')
const endereco = document.querySelector('#endereco')
const cidade = document.querySelector('#cidade')
const casa = document.querySelector('#casa')
const apart = document.querySelector('#apart')


const resumo = document.querySelector('#resumo')
const cargo = document.querySelector('#cargo')
const descricao_cargo = document.querySelector('#descricao-cargo')
const data_inicio = document.querySelector('#data-inicio')

const submit = document.querySelector('#submit')

function aviso(text) {
  const span = document.createElement('span')
  span.innerText = text
  span.style.color = 'red'
  span.style.display = 'block'
  return span
}

function preven(e) {
  e.preventDefault()
  nomeTest()
  emailTest()
} 
submit.addEventListener('click', preven)

function nomeTest() {
  if (nome.value === '') {
    nome.parentElement.appendChild(aviso('O nome está vazio'))
  }
}

function emailTest() {
  if (email.value === '') {
    email.parentElement.appendChild(aviso('O Email está vazio'))
  }
}
*/