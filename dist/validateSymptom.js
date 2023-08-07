import { pacient } from "./main.js"

export function validateSymptom(symptom) {
  if (symptom !== '') {
    pacient.symptom.style.border = '2px solid green'
    pacient.symptom.classList.remove('invalid-input')
    pacient.symptom.classList.add('valid-input')
  } else {
    pacient.symptom.style.border = '2px solid red'
    pacient.symptom.classList.remove('valid-input')
    pacient.symptom.classList.add('invalid-input')
  }
}