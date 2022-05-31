import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super()

    this.state = {
      estado: '',
      nome: '',
      email: '',
      descricao: ''
    }
    this.handlerChange = this.handlerChange.bind(this)
  }

  handlerChange({ target }) {
    const { name, value } = target;
    
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <form>
        <label>
          Estado: 
          <select name="estado" value={this.state.estado} onChange={this.handlerChange}>
            <option value="">- Selecione -</option>
            <option value="Pa">Pará</option>
            <option value="Mg">Minas Gerais</option>
            <option value="Al">Alagoas</option>
            <option value="Rn">Rio Grande do Norte</option>
            <option value="Sc">Santa Catarina</option>
          </select>
        </label>

        <label>
          Nome: 
          <input type="text" name="nome" id="nome" value={this.state.nome} onChange={this.handlerChange}/>
        </label>

        <label>
          E-mail: 
          <input type="email" name="email" id="email" value={this.state.email} onChange={this.handlerChange}/>
        </label>

        <label>
          Descrição: 
          <textarea name="descricao" id="descricao" value={this.state.descricao} onChange={this.handlerChange}></textarea>
        </label>

      </form>
    );
  }
}

export default Form;