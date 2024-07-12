const lowerCaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const upperCaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numbersZeroToNine = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const selectedSpecialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "+",
  "-",
  ".",
  "~",
  "|",
  "<",
  ">",
  "=",
  "-",
  "_",
  "/",
  ":",
  ";",
  "?",
  "[",
  "]",
  "{",
  "}",
  "~",
];

let passwordPatternCharacters = "";

function passwordPatternGenerator() {
  while(lowerCaseLetters.length > 0) {
    passwordPatternCharacters += lowerCaseLetters.splice(Math.floor(Math.random() * lowerCaseLetters.length),1);
    passwordPatternCharacters += numbersZeroToNine[Math.floor(Math.random() * numbersZeroToNine.length)];
    passwordPatternCharacters += selectedSpecialCharacters[Math.floor(Math.random() * selectedSpecialCharacters.length)];
    passwordPatternCharacters += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
  }

}
passwordPatternGenerator()



 export {passwordPatternCharacters}