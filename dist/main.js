import { validateName } from "./validateName.js"
import { validateAge } from "./validateAge.js"
import { validatePhone } from "./validatePhone.js"
import { validateSymptom } from "./validateSymptom.js"

export const pacient = {
  name: document.getElementById('name'),
  age: document.getElementById('age'),
  phone: document.getElementById('phone'),
  symptom: document.getElementById('symptom')
}

const form = document.getElementById('registerForm')
let liRows = 0

form.addEventListener('submit', (ev) => {
  ev.preventDefault()
  validateName(pacient.name.value)
  validateAge(pacient.age.value)
  validatePhone(pacient.phone.value)
  validateSymptom(pacient.symptom.value)

  const inputs = document.querySelectorAll('input')

  let allValid = true

  inputs.forEach(input => {
    if (!input.classList.contains('valid-input')) {
      allValid = false
    }
  })
  if (allValid) {
    alert('Paciente Cadastrado')
    inputs.forEach(input => {
      input.style.border = ''
    })

    let newRow = liRows
    liRows++

    const pacients = document.getElementById('pacients')

    const li = document.createElement('li')
    li.innerText = `Nome do paciente: ${pacient.name.value}\n Idade do paciente: ${pacient.age.value}\n Telefone para contato: ${pacient.phone.value}\n sintoma do paciente: ${pacient.symptom.value}`
    li.id = 'li-' + newRow
    const removeButton = document.createElement('button')
    removeButton.classList.add('remove')
    removeButton.innerText = 'Remover'
    removeButton.addEventListener('click', () => {
      pacients.removeChild(li)
    })

    const hr = document.createElement('hr')
    li.append(removeButton, hr)
    pacients.appendChild(li)
  }
  form.reset()
})