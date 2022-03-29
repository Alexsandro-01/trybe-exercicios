const url = 'https://api.coincap.io/v2/assets';
const section = document.querySelector('section');
const ul = document.createElement('ul');
section.appendChild(ul);


fetch(url)
.then((response) => response.json())
.then((data) => cripto(data))


function cripto(obj) {
  const tenList = obj.data.filter((value, index) => index < 10);
  tenList.forEach(element => {
    const li = document.createElement('li');
    li.innerHTML = `${element.name} (${element.symbol}): ${Number(element.priceUsd).toFixed(2)}`;
    ul.appendChild(li);
  });
}

// cripto()
