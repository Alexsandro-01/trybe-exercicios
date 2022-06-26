import { Component } from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const renderConteudo = (value, index) => {
  const styleCard = value.status === 'Aprendido' ? 'card green' : 'card yellow';
  return (
    <li key={index} className={styleCard}>
      <p>O conteúdo é: <span>{value.conteudo}</span></p>
      <p>Status: <span>{value.status}</span></p>
      <p>Bloco: <span>{value.bloco}</span></p>
    </li>
  );
}

class Content extends Component {
  render() {
    return (
      <ul>
        { conteudos.map((value, index) => renderConteudo(value, index))}
      </ul>
    );
  }
}

export default Content;