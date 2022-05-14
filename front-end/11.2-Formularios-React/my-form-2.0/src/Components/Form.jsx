import React from 'react';

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      mora: '',
      resumo: '',
      cargo: '',
      descricao: '',
    }
  }

  handleChange = ({target}) => {
    const { name, value } = target;
    this.setState({
      [name]: name === 'nome' ? value.toUpperCase() : value,
    })
  }

  render() {
    return (
      <form >
        <fieldset>
          <label htmlFor="nome">
            Nome: <br />
            <input type="text" name="nome" id="nome" maxLength="40" value={this.state.nome} onChange={this.handleChange}/>
          </label>
          <label htmlFor="email">
            E-mail: <br />
            <input type="email" name="email" id="email" maxLength="50" value={this.state.email} onChange={this.handleChange}/>
          </label>
          <label htmlFor="cpf">
            CPF: <br />
            <input type="number" name="cpf" id="cpf" maxLength="11" value={this.state.cpf} onChange={this.handleChange}/>
          </label>
          <label htmlFor="endereco">
            Endereço: <br />
            <input type="text" name="endereco" id="endereco" maxLength="200" />
          </label>
          <label htmlFor="cidade">
            Cidade: <br />
            <input type="text" name="cidade" id="cidade" maxLength="28" />
          </label>
          <label htmlFor="estado">
            Estado: <br />
            <select name="estado" id="estado">
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
              <option value="EX">Estrangeiro</option>
            </select>

          </label>
          <label htmlFor="casa">
            Casa:
            <input type="radio" name="mora" id="casa" />
          </label>
          <label htmlFor="apart">
            Apartamento:
            <input type="radio" name="mora" id="apart" />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="resumo">
            Resumo: <br />
            <textarea name="resumo" id="resumo" cols="20" rows="5" maxLength="1000"></textarea>
          </label>
          <label htmlFor="cargo">
            Cargo: <br />
            <textarea name="cargo" id="cargo" cols="20" rows="5" maxLength="40"></textarea>
          </label>
          <label htmlFor="descricao">
            Descrição: <br />
            <input type="text" name="descricao" id="descricao" maxLength="500" />
          </label>
        </fieldset>

        <div>
          <button type='submit'>Enviar</button>
        </div>
      </form>
    );
  }
}

export default Form;