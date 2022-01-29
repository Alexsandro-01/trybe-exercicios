// imprime a temperatura em marte deposi de até 5 segundos

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
function sendMarsTemperature(temperature, delay) {
  setTimeout(() => {
    return console.log(`Mars temperature is: ${temperature()} degree Celsius`);
  }, delay());
}

sendMarsTemperature(getMarsTemperature, messageDelay); // imprime "Mars temperature is: 20 degree Celsius", por exemplo