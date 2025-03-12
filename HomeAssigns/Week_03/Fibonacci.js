// Understand and apply basic programming constructs in TypeScript to compute the Fibonacci sequence using iterative methods.
function fibonacci(n) {
    if (n < 0) {
        console.log(" Error - Provide non negative number");
    }
    if (n == 0)
        return 0;
    if (n == 1)
        return 1;
    var a = 0;
    var b = 1;
    for (var i = 2; i <= n; i++) {
        var sum = a + b;
        a = b;
        b = sum;
    }
    return b;
}
console.log(fibonacci(2));
console.log(fibonacci(7));
console.log(fibonacci(-3));
