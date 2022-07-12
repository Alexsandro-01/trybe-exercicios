const sinon = require('sinon');
const { expect } = require('chai');

/*
  Como ainda não temos a implementação, vamos fixar
  um objeto simulando os métodos que iremos desenvolver,
  porém, eles não terão nenhum comportamento
*/

// const MoviesModel = {
//   create: () => {}
// };

const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describe('Insere um novo filme no BD',  () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  }

  before(async () => {
    const query = [{ insertId: 1 }]; // response expected in this test

    sinon.stub(connection, 'query').resolves(query);
  });

  // restore the original 'query' function after the tests.
  after(async () => {
    connection.query.restore();
  })

  describe('quando é inserido com sucesso', () => {


    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do filme inserido', async () =>  {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a.property('id');
    });

  });
});