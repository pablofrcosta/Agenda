import { pacient } from "./main.js"
export function validatePhone(phone) {
  if (!phone.match(/^\(\d{2}\) \d{9}$/)) {
    alert('Por favor, insira um telefone no formato correto (xx) xxxxxxxxx')
    pacient.phone.style.border = '2px solid red'
    pacient.phone.classList.remove('valid-input')
    pacient.phone.classList.add('invalid-input')
  } else if (phone == '') {
    pacient.phone.style.border = '2px solid red'
    pacient.phone.classList.remove('valid-input')
    pacient.phone.classList.add('invalid-input')
  } else {
    pacient.phone.style.border = '2px solid green'
    pacient.phone.classList.remove('invalid-input')
    pacient.phone.classList.add('valid-input')
  }
}