## 1ª Forma Normal

### Para iniciar a organização de um banco de dados, devemos nos atentar para a Primeira Forma Normal - base de todas as outras. Seus preceitos são:

- Colunas devem possuir apenas um valor;
- Valores em uma coluna devem ser do mesmo tipo de dados;
- Cada coluna deve possuir um nome único;
- A ordem dos dados registrados em uma tabela não deve afetar a integridade dos dados.

<br />

## 2ª Forma Normal

### Para a Segunda Forma Normal, devemos atentar para o seguinte:

- A tabela deve estar na 1ª Forma Normal;
- A tabela não deve possuir dependências parciais

<br />

## 3ª Forma Normal

### Por fim, a Terceira Forma Normal estabelece que:

- A tabela deve estar na 1ª e 2ª Formas Normais;
- A tabela não deve conter atributos (colunas) que não sejam dependentes exclusivamente da PK (chave primária).

<br />

`Tabela sem 3ª Forma norma, já que a coluna categoria não depende do livro_id`

<table class="table table-striped table-bordered">
      <thead class="thead-dark">
      <tr>
        <th>livro_id</th>
        <th>categoria_id</th>
        <th>categoria</th>
        <th>valor</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>1</td>
        <td>Romance</td>
        <td>29,90</td>
      </tr>
      <tr>
        <td>2</td>
        <td>2</td>
        <td>Policial</td>
        <td>34,90</td>
      </tr>
      <tr>
        <td>3</td>
        <td>3</td>
        <td>Ficção</td>
        <td>19,90</td>
      </tr>
      <tr>
        <td>4</td>
        <td>4</td>
        <td>Ficção</td>
        <td>44,90</td>
      </tr>
    </tbody>
</table>

<br />

`Tabela Livro referenciando apenas o id da categoria`

<div> 
  <table class="table table-striped table-bordered">
    <thead class="thead-dark">
      <tr>
        <th>livro_id</th>
        <th>categoria_id</th>
        <th>valor</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>1</td>
        <td>29,90</td>
      </tr>
      <tr>
        <td>2</td>
        <td>2</td>
        <td>34,90</td>
      </tr>
      <tr>
        <td>3</td>
        <td>3</td>
        <td>19,90</td>
      </tr>
      <tr>
        <td>4</td>
        <td>4</td>
        <td>44,90</td>
      </tr>
    </tbody>
  </table>

</div>

<br />

  `Tabela de categoria com seu id para referencia na tabela livro`
  
  <table class="table table-striped table-bordered">
      <thead class="thead-dark">
      <tr>
        <th>categoria_id</th>
        <th>categoria</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Romance</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Policial</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Ficção</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Ficção</td>
      </tr>
    </tbody>
  </table>
    