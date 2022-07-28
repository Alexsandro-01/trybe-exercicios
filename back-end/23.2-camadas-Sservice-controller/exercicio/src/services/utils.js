function throwError(code, message) {
  return {
    error: {
      code,
      message,
    },
  };
}

module.exports = throwError;
