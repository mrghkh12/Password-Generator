const $ =document

const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbersZeroToNine = '0123456789';
const selectedSpecialCharacters = '!@#$%^&*()+-.~|<>[],=-_/:;?{}~';
const passwordLenght = 10

const outputPassword = $.querySelector('#outputPassword')
const generatorbtn = $.querySelector(".outputBtn")

const copyPasswordBtn = $.querySelector('.output-section img')

let allCharacters = lowerCaseLetters + upperCaseLetters + numbersZeroToNine + selectedSpecialCharacters

let password = ''

generatorbtn.addEventListener('click' , passwordGenerator)
function passwordGenerator(){
    outputPassword.value = ''
    password = ''
    while(password.length < passwordLenght){
        password += allCharacters[Math.round(Math.random() * allCharacters.length)]
    }
    console.log(password);
    outputPassword.value = password
}

copyPasswordBtn.addEventListener('click' , () =>{
    navigator.clipboard.writeText(outputPassword.value) 
})