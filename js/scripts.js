const formElement = document.getElementById('form');
const rangeElement = document.getElementById('range');
const passwordLengthElement = document.getElementById('password-length');
const generatedPasswordElement = document.getElementById('generated-password');
// Checkboxes START
const uppercaseElement = document.getElementById('uppercase');
const lowercaseElement = document.getElementById('lowercase');
const numbersElement = document.getElementById('numbers');
const symbolsElement = document.getElementById('symbols');
// Checkboxes END
const strengthElement = document.getElementById('strength-value');
const strengthWarning = ['Muy débil', 'Débil', 'Media', 'Fuerte'];
const generateElement = document.getElementById('generate');

// Objeto "strings" con los strings básicos
const strings = {
  uppercase: 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnñopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!()-.?[]_~:@#$%^&*+='
};

// Función número aleatorio
const minMaxRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Variable con la longitud de la contraseña
let passwordLength = 0;

// String de donde se extraerán caracteres para la contraseña final
let newString = '';

// Función que detecta cambios en el formulario
// Empieza con newString vacío para que no se acumulen los strings
// Vincular valor del range con longitud de la contraseña
formElement.addEventListener('change', e => {
  const checkedBoxes = document.querySelectorAll('input:checked');
  newString = '';
  passwordLength = rangeElement.value;
  passwordLengthElement.textContent = passwordLength;
  if (uppercaseElement.checked) newString += strings.uppercase;
  if (lowercaseElement.checked) newString += strings.lowercase;
  if (numbersElement.checked) newString += strings.numbers;
  if (symbolsElement.checked) newString += strings.symbols;

  if (passwordLength < 5) {
    strengthElement.textContent = 'Muy corta';
    generateElement.setAttribute('disabled', 0);
  } else if (checkedBoxes.length === 0) {
    strengthElement.textContent = 'Ninguna opción elegida';
    generateElement.setAttribute('disabled', 0);
  } else {
    generateElement.removeAttribute('disabled');
    strengthElement.textContent = strengthWarning[checkedBoxes.length - 1];
  }
});

// Generar contraseña a partir de newString
const generatePassword = () => {
  let newPassword = '';
  for (let index = 0; index < passwordLength; index++) {
    newPassword += newString.charAt(minMaxRandomNumber(0, newString.length));
  }
  generatedPasswordElement.value = newPassword;
};

// ENVIAR FORMULARIO
// Contiene un preventDefault para que el navegador no se actualice al enviarlo (comportamiento por defecto)
// Y para que genere la constraseña
formElement.addEventListener('submit', e => {
  e.preventDefault();
  generatePassword();
});
