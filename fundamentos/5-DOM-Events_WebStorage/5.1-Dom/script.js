let emergency = document.querySelector('.emergency-tasks')
let emergency_h3 = document.querySelectorAll('.emergency-tasks h3')

let noEmergency = document.querySelector('.no-emergency-tasks')
let noEmergency_h3 = document.querySelectorAll('.no-emergency-tasks h3')

emergency.style.background = '#333'
emergency_h3[0].style.background = 'darkred'
emergency_h3[1].style.background = 'darkred'

noEmergency.style.background = '#999'
noEmergency_h3[0].style.background = 'goldenrod'
noEmergency_h3[1].style.background = 'goldenrod'