import { pacient } from "./main.js"
export function validateName(name) {
  if (!name.match(/^[a-zA-Z]*$/)) {
    alert('O nome necessita ter a primeira letra maiúscula e não conter numeros')
    pacient.name.style.border = '2px solid red'
    pacient.name.classList.remove('valid-input')
    pacient.name.classList.add('invalid-input')
  } else if (name == '') {
    pacient.name.style.border = '2px solid red'
    pacient.name.classList.remove('valid-input')
    pacient.name.classList.add('invalid-input')
  } else {
    pacient.name.style.border = '2px solid green'
    pacient.name.classList.remove('invalid-input')
    pacient.name.classList.add('valid-input')
  }
}