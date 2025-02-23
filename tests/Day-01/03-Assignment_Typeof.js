// typeof and diff between var/let/const

let firstName = "Saranya";
let companyName = "ADF";
let mobileNumber = 97856647734;
let isAutomation = true;
let hasPlaywright;
let score = null;
console.log("Datatype for firstName : ", firstName, "-> " , typeof(firstName));

console.log("Datatype for companyName : ", companyName, "-> " , typeof(companyName));

console.log("Datatype for mobileNumber : ", mobileNumber, "-> " , typeof(mobileNumber));

console.log("Datatype for isAutomation : ", isAutomation, "-> " , typeof(isAutomation));

console.log("Datatype for hasPlaywright : ", hasPlaywright, "-> " , typeof(hasPlaywright));
console.log("Datatype for score : ", score, "-> " , typeof(score));


console.log("var --- let --- const");
//var vs let

// var - redeclaration is allowed
var accnum = 123;
var accnum = 678;
console.log("accnum ",accnum);
// var - re assignment is allowed
var course = "PW";
course = "JS";
console.log("course ",course);


// let - only re-assingment is allowed
let id =133;
id = 167;
console.log("id" , id);


// const - re declaration and re-assignment is not allowed
/*const num = 2324;
num = 8765;
console.log("num", num);
*/


//Hoisting -> var t is moved above the code here. 
console.log(t);
var t = 20;
console.log(t);

// Hoisting -> for let it is not initialised.so throws reference error.
console.log(r);
let r = "aa";
console.log(r);
