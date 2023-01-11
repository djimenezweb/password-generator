const formElement = document.getElementById('form');
const passwordLengthElement = document.getElementById('password-length');
const generatedPasswordElement = document.getElementById('generated-password');
// Constantes de los checkboxes
const uppercaseElement = document.getElementById('uppercase');
const lowercaseElement = document.getElementById('lowercase');
const numbersElement = document.getElementById('numbers');
const symbolsElement = document.getElementById('symbols');
// Fin constantes de los checkboxes
const generateElement = document.getElementById('generate');

const alphabet = 'abcdefghijklmnñopqrstuvwxyz';

const minMaxRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

minMaxRandomNumber(3, 8);

// Variable con la longitud de la contraseña
let passwordLength = 0;

// Para que no se actualice al enviar formulario (comportamiento por defecto)
// Y para que genere la constraseña
formElement.addEventListener('submit', e => {
  e.preventDefault();
  generatePassword();
  if (uppercaseElement.checked) console.log('Uppercase checked');
  if (lowercaseElement.checked) console.log('Lowercase checked');
  if (numbersElement.checked) console.log('Numbers checked');
  if (symbolsElement.checked) console.log('Symbols checked');
});

// Vincular valor del range con longitud de la contraseña
formElement.addEventListener('change', e => {
  passwordLength = e.target.value;
  passwordLengthElement.textContent = passwordLength;
});

// Generar contraseña
const generatePassword = () => {
  let newString = '';
  for (let index = 0; index < passwordLength; index++) {
    newString += alphabet.charAt(minMaxRandomNumber(0, alphabet.length));
  }
  generatedPasswordElement.value = newString;
};
