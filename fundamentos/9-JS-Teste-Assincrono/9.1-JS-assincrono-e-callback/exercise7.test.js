const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

describe('Verifica se o a String passa como parametro para a função uppercase é convertida em maiúscula', () => {
  it('uppercase "alex" to be "ALEX"', (done) => {
    uppercase('alex', (value) => {
      try {
        expect(value).toBe('ALEX');
        done();
      } catch (error) {
        done(error)        
      }
    })
  })
})