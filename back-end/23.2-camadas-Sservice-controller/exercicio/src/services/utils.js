function throwError(code, message) {
  const erro = new Error(message);
  erro.code = code;
  throw erro;
}

module.exports = throwError;
