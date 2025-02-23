//Task 1 function declaration 

function userProfile(name)
{
    console.log(`Hello ${name}`);
}
userProfile("Saranya");

// Task 2  Arrow function
let double = (number) =>{
    console.log(` value - ${number*number}`);   
}
double(6);

// task 3  Anonymous function 
let delaytime = setTimeout(() => {
    console.log( `The message is delayed by 2 seconds`);  
},2000);
delaytime;

// task 4 callback

function getUserData(calldetails)
{
    setTimeout(() => {
        console.log( `FEtching data .....`);  
    },1000);
    calldetails("aaa",getage);
}

function details(name,callgetage)
{   
    console.log(`username is ${name}`);
    callgetage(name,10);
   
}
function getage(name,age)
{
    console.log(` ${name} age is ${age}`);
}
getUserData(details);


// Task 5
