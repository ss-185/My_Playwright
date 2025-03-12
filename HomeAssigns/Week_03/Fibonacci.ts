// Understand and apply basic programming constructs in TypeScript to compute the Fibonacci sequence using iterative methods.


function fibonacci(n:number):number{

    if(n < 0)
    {
        console.log(` Error - Provide non negative number`);
    }
    if(n==0) return 0;
    if(n==1) return 1;
    let a=0;
    let b=1;
    for(let i=2; i<=n; i++)
    {
        let sum = a+b;     
        a=b;
        b=sum;
    }
    return b;
}

console.log(fibonacci(2));
console.log(fibonacci(7));
console.log(fibonacci(-3));