// function that determines if a number is positive, negative, or zero and returns a corresponding string indicating the type.
let number = 24;

function getNumberType( number)
{
    let numberType;
    if(number>0)
        numberType = "Positive";
    if(number<0)
        numberType = "Negative";
    if(number==0)
        numberType = "Neutral";
    return numberType;
}
let numberType = getNumberType(number);
console.log(` The given number ${number} is ${numberType}`);