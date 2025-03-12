// Understand and apply basic programming constructs in TypeScript to compute the factorial of a non-negative integer using iterative methods.

const input = -3;

function factorial(n:number):number{    
    let result =1 ;
    if(n<0)
    {
        console.log("Error : Provide non negative number");            
    }
    else
    {       
        for( let i=2; i<=n;i++){
            result = result*i;
        }       
    }
    return result;
}
console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(-4));