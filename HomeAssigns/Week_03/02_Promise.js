
//Understand how to create and use Promises in JavaScript.

let conditionalPromise = new Promise ((resolve, reject)=>{
    let number = 56;
if (number>0.5){
    resolve(` ${number} Resolved successfully`);
}else {
reject(`${number} Rejected`);
}
})

conditionalPromise
.then(message =>{
    console.log(message);    
})
.catch(error=>{
console.log(error);
})