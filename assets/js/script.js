let genbutton=document.getElementById("GenPassword");  
let userchoice =["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]
character = ["!","@","#","$","%","^","&","*","(",",",")","-","=","+","/",".",",","?","<",">",";",":"];
number =[1,2,3,4,5,6,7,8,9];
uppercase=["Q","W", "E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]
// setting up prompt questions
let passwordlength = prompt("How many characters would you like it to be? Needs to be between 8-128")
let hascharacter = confirm("Do you want special characters in your password?")
let hasnumber = confirm("Do you want numbers in your password?")
let hasupper= confirm ("Do you want uppercase letters?")

function generatePassword (){

if (passwordlength <= 128 && passwordlength >= 8){
    console.log(passwordlength + " Number of characters");

}
if(hascharacter === true){
    console.log ("Does want special characters.");
    userchoice = userchoice.concat(character);
    console.log(userchoice);
}
if (hasnumber === true){
    console.log ("Does want numbers.");
    userchoice = userchoice.concat(number);
    console.log(userchoice);
}
if (hasupper === true){
    console.log ("Does want uppercase letters.");
    userchoice = userchoice.concat(uppercase);
    console.log(userchoice);
}
var finalPassword= '';
 for (let i = 0; i < passwordlength; i++) {
    var randomNumber = Math.floor(Math.random()* userchoice.length);
    // console.log(userchoice[randomNumber]);
    finalPassword+=userchoice[randomNumber];

 }
 document.getElementById("yoursecurepw").value=finalPassword;
}


 generatePassword(); 

