// fundamentals of looping statements in JavaScript

function printOddNumbers( stNumber, endNumber)
{
    console.log(`Printing Odd numbers from ${stNumber} to ${endNumber}`);
    for(let i=stNumber; i<=endNumber; i++)
    {
        if((i%2)!=0)
        {
            console.log(i);
        }
    }
}
printOddNumbers(1,25);

