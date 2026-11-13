function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){
  
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+-=';
  
  let Chars = '';
  let passWord = '';
  
  Chars += includeLowerCase ? lowerCaseChars : '',
  Chars += includeUpperCase ? upperCaseChars : '',
  Chars += includeNumbers ? numberChars : '',
  Chars += includeSymbols ? symbolChars : '';
  
  if(length <= 0){
    return ('You password should not be 0')
  } 
  if (Chars.length === 0){
    return ('At least 1 set of characters should be used')
  }
  
  for(let i = 0; i < length; i++){
    const randomChars = Math.floor(Math.random() * Chars.length)
    passWord += Chars[randomChars];
  }
  
  return passWord;
}


const passlength = 15;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const generatedPass = generatePassword(passlength, 
                                       includeLowerCase, 
                                       includeUpperCase, 
                                       includeNumbers, 
                                       includeSymbols)

console.log(`Generated Password: ${generatedPass}`)