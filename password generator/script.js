// DOM Elements
const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('include-uppercase');
const lowercaseEl = document.getElementById('include-lowercase');
const numbersEl = document.getElementById('include-numbers');
const symbolsEl = document.getElementById('include-symbols');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');

// Character Pools
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+-=[]{}|;:",.<>?/';

// Function to generate a password
function generatePassword() {
  const length = parseInt(lengthEl.value);
  const includeUppercase = uppercaseEl.checked;
  const includeLowercase = lowercaseEl.checked;
  const includeNumbers = numbersEl.checked;
  const includeSymbols = symbolsEl.checked;

  let charPool = '';
  if (includeUppercase) charPool += uppercaseChars;
  if (includeLowercase) charPool += lowercaseChars;
  if (includeNumbers) charPool += numberChars;
  if (includeSymbols) charPool += symbolChars;

  if (!charPool) {
    alert('Please select at least one character type!');
    return '';
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charPool.length);
    password += charPool[randomIndex];
  }

  return password;
}

// Event Listeners
generateBtn.addEventListener('click', () => {
  const password = generatePassword();
  passwordEl.value = password;
});

copyBtn.addEventListener('click', () => {
  if (!passwordEl.value) {
    alert('No password to copy!');
    return;
  }
  navigator.clipboard.writeText(passwordEl.value)
    .then(() => alert('Password copied to clipboard!'))
    .catch(err => console.error('Error copying password:', err));
});
