let head = document.querySelector('header')
head.style.background = 'rgb(76,164,109)'

let foot = document.querySelector('footer')
foot.style.background = 'rgb(76,164,109)'

let emergency = document.querySelector('.emergency-tasks')
let emergency_h3 = document.querySelectorAll('.emergency-tasks h3')

let noEmergency = document.querySelector('.no-emergency-tasks')
let noEmergency_h3 = document.querySelectorAll('.no-emergency-tasks h3')

emergency.style.background = 'rgb(76,164,109)'
emergency_h3[0].style.background = 'orangered'
emergency_h3[1].style.background = 'orangered'

noEmergency.style.background = 'rgb(100,164,200)'
noEmergency_h3[0].style.background = 'goldenrod'
noEmergency_h3[1].style.background = 'goldenrod'