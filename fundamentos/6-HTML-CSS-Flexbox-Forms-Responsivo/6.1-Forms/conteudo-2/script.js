// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function preven(e) {
  e.preventDefault()
  //console.log(e)
}

function press(e) {
  if (e.key !== 'a') {
    e.preventDefault()
  } 
}

HREF_LINK.addEventListener('click', preven)
INPUT_CHECKBOX.addEventListener('click', preven)
INPUT_TEXT.addEventListener('keypress', press)