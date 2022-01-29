// eslint-disable-next-line no-undef
const books = require('./books');

const AuthorsName = books.reduce( (acc, curr, index) => {

  if (index === books.length - 1) {
    return `${acc} ${curr.author.name}.`
  }
  return `${acc} ${curr.author.name},`
}, '');

console.log(AuthorsName.trim())