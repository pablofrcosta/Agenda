import { pacient } from "./main.js"
export function validateAge(age) {
  if (age > 110) {
    alert('Acho meio impossivel vc ter essa idade, insira uma idade certa')
    pacient.age.style.border = '2px solid red'
    pacient.age.classList.remove('valid-input')
    pacient.age.classList.add('invalid-input')
  } else if (age == '') {
    pacient.age.style.border = '2px solid red'
    pacient.age.classList.remove('valid-input')
    pacient.age.classList.add('invalid-input')
  }
  else {
    pacient.age.style.border = '2px solid green'
    pacient.age.classList.remove('invalid-input')
    pacient.age.classList.add('valid-input')
  }
}