const formElement = document.getElementById('form');
const passwordLengthElement = document.getElementById('password-length');
const generatedPasswordElement = document.getElementById('generated-password');
// Checkboxes START
const uppercaseElement = document.getElementById('uppercase');
const lowercaseElement = document.getElementById('lowercase');
const numbersElement = document.getElementById('numbers');
const symbolsElement = document.getElementById('symbols');
// Checkboxes END
const generateElement = document.getElementById('generate');

// Objeto "strings" con los strings básicos
const strings = {
uppercase: 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ',
lowercase: 'abcdefghijklmnñopqrstuvwxyz',
numbers: '0123456789',
symbols: '!()-.?[]_~:@#$%^&*+='
}

// Función número aleatorio
const minMaxRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Variable con la longitud de la contraseña
let passwordLength = 0;

// String de donde se extraerán caracteres para la contraseña final
let newString = '';

// Función que detecta cambios en el formulario
// Vincular valor del range con longitud de la contraseña
formElement.addEventListener('change', e => {
  passwordLength = e.target.value;
  passwordLengthElement.textContent = passwordLength;
  if (uppercaseElement.checked) newString += strings.uppercase;
  if (lowercaseElement.checked) newString += strings.lowercase;
  if (numbersElement.checked) newString += strings.numbers;
  if (symbolsElement.checked) newString += strings.symbols;
  console.log(newString);
});

// Generar contraseña a partir de newString
const generatePassword = () => {
  let newPassword = ''
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
  if (uppercaseElement.checked) console.log('Uppercase checked');
  if (lowercaseElement.checked) console.log('Lowercase checked');
  if (numbersElement.checked) console.log('Numbers checked');
  if (symbolsElement.checked) console.log('Symbols checked');
});