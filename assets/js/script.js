var genbutton = document.getElementById("GenPassword")

var userchoice =[]
character = ["!","@","#","$","%","^","&","*","(",",",")","-","=","+","/",".",",","?","<",">",";",":"];
number =[1,2,3,4,5,6,7,8,9];
letter = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];

function generatePassword (){
var passwordlength = prompt("How many characters would you like it to be?")
var hascharacter = confirm("Do you want special characters in your password?")
var hasnumber = confirm("Do you want numbers in your password?")
var hasupper= confirm ("Do you want uppercase letters?")
// if (hascharacter === true){
// //     // console.log("working?")
// //     // return choices;
// //     // console.log ("is this working")

// // //     console.log("User would like characters")
// // //     // character
// // // // }else{
// // // //     userchoice
// // // }
    
// }

// function writePassword(){
//     var password =generatePassword();
//     var passwordText =document.querySelector("#yoursecurepw");
//     passwordText.value =password;
// }


genbutton.addEventListener("click",function(){
generatePassword()
})
}

