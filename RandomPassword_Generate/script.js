function generatePassword(
  length,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSpecialCharacters
) {
  const UppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const LowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const Numbers = '0123456789';
  const SpecialCharacters = '!@#$%^&_-?';

  let allowChars = '';
  let password = '';

  allowChars += includeUppercase ? UppercaseLetters : '';
  allowChars += includeLowercase ? LowercaseLetters : '';
  allowChars += includeNumbers ? Numbers : '';
  allowChars += includeSpecialCharacters ? SpecialCharacters : '';

  if (length <= 0) {
    return 'Password length must be atleast 1';
  }
  if (allowChars.length === 0) {
    return 'Password length must be atleast 1';
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowChars.length);
    password += allowChars[randomIndex];
  }

  return password;
}

const passwordLength = 12;
const includeUppercase = true;
const includeLowercase = true;
const includeNumbers = true;
const includeSpecialCharacters = true;

const password = generatePassword(
  passwordLength,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSpecialCharacters
);
console.log(`Password Generated: ${password}`);
