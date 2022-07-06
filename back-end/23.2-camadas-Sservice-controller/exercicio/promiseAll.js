const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, _reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 100);
});

const data = [p1, p2, p3];

Promise.all(data.map((value) => value)).then((valores) => {
  console.log(valores); // [3, 1337, "foo"]
});