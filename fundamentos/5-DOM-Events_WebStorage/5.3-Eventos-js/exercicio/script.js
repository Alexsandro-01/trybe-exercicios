function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
function log(val) {
  return console.log(val)
};

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const ul = document.querySelector('#days')

// 1
function days() {
  
  for(let day of dezDaysList) {
    const li = document.createElement('li')

    if(day == 24 || day == 25 || day == 31) {
      li.classList.add("day", "holiday")
      if(day == 25) {
        li.classList.add("day", "friday", "holiday")
      }
      li.innerText = day
      ul.appendChild(li)
    }
    else if(day == 4 || day == 11 || day == 18) {
      li.classList.add("day", "friday")
      li.innerText = day
      ul.appendChild(li)
    }
    else {
      li.classList.add("day")
      li.innerText = day
      ul.appendChild(li)
    }
  }
}
//console.log(ul)
window.onload = days()
// 2
function makeBtn(day, id) {
  let btn = document.createElement('button')
  btn.setAttribute('id', id)
  btn.innerText = day

  let divBtn = document.querySelector('.buttons-container')
  divBtn.appendChild(btn)
}
makeBtn('Feriados', 'btn-holiday')

// 3
function spotDays(e) {

  if(e.target.id == 'btn-holiday') {
    spot('.holiday', 'darkred')
    //log()
  }
  else {
    spot('.friday', 'deepskyblue')
  }

  function spot(selector, color) {
    let holidays = document.querySelectorAll(selector, color)
    for( let day of holidays){

      if(day.style.background !== color) {
        day.style.background = color
      }
      else /* if(day.style.background === 'rgb(238,238,238)') */ {
        day.style.background = 'rgb(238,238,238)'
      }
    }
  }
}

function listener(id) {
  let btnHoliday = document.querySelector(id)
  btnHoliday.addEventListener('click', spotDays)
}
listener('#btn-holiday')

// 4
makeBtn('Sexta-feira', 'btn-friday')
listener('#btn-friday')