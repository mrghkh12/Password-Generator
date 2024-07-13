import { passwordPatternCharacters } from "./PasswordPattern.js";
const $ = document;

const passwordLenght = 10;

const outputPassword = $.querySelector("#outputPassword");
const generatorbtn = $.querySelector(".outputBtn");

const copyPasswordBtn = $.querySelector(".output-section img");

let password = "";

generatorbtn.addEventListener("click", passwordGenerator);
function passwordGenerator() {
  outputPassword.value = "";
  password = "";
  while (password.length < passwordLenght) {
    password +=
      passwordPatternCharacters[
        Math.round(Math.random() * passwordPatternCharacters.length)
      ];
  }
  outputPassword.value = password;
}

copyPasswordBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(outputPassword.value);
});
