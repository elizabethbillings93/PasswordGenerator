let genbutton=document.getElementById("GenPassword");  
let userchoice =[ ]
character = ["!","@","#","$","%","^","&","*","(",",",")","-","=","+","/",".",",","?","<",">",";",":"];
number =[1,2,3,4,5,6,7,8,9];
letter = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];

function writePassword(){
    var password =generatePassword();
    var passwordText =document.getElementById("yoursecurepw");
    passwordText.value =password;
}
// setting up prompt questions
function generatePassword (){
let passwordlength = prompt("How many characters would you like it to be? Needs to be between 8-128")
let hascharacter = confirm("Do you want special characters in your password?")
let hasnumber = confirm("Do you want numbers in your password?")
let hasupper= confirm ("Do you want uppercase letters?")
genbutton.addEventListener("click",writePassword)
if (passwordlength <= 128 && passwordlength >= 8){
    console.log(passwordlength + " Number of characters",getRandomLower);
    function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random()* 26) +97);
}
}
if(hascharacter === true){
    console.log ("Does want special characters.");
    function getRandomSymbol(){
    return character[Math.floor(Math.random() * character.length)];
}
}
  

if (hasnumber === true){
    console.log ("Does want numbers.",getRandomNumber);
    function getRandomNumber(){
    return String.fromCharCode[Math.floor(Math.random()* 10) +48];
}
}
if (hasupper === true){
    console.log ("Does want uppercase letters.",getRandomUpper);
    function getRandomUpper(){
    return String.fromCharCode[Math.floor(Math.random()* 26) +64];
    }
}
if  (hasupper === false){
    console.log ("Does not want uppercase.");
}
if (hascharacter === false){
    console.log ("Does not want special characters.");
}
if (hasnumber === false){
    console.log ("Does not want numbers.");  
}  
}
    generatePassword(); 
  