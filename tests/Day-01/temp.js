
console.log(x);
var x = 10;
console.log(x);

console.log(y);
let y = 15;
console.log(y);

// nullish
let uname = null;
let dispname = uname??"notnull";
console.log(dispname);

let city = null;
// console.log(city.name); // throws ref error
console.log(city?.name);