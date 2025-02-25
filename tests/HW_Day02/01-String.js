// to reverse a string and check for palindromes in JavaScript by manipulating strings and using conditional logic.

let inputStr = "Madam";
console.log(` Original String ${inputStr} `);
function isPalindrome(input)
{   
    let originalstr = input.toLowerCase();
    let inputstrchar = originalstr.split("");
    let reversedStr = "";
  
   for( let i= inputstrchar.length-1; i >=0; i--)
   {
     reversedStr += inputstrchar[i];
   }
   console.log(` Reversed String ${reversedStr} `);
   if(originalstr===reversedStr)
   {
    console.log(` Given String - ${inputStr} is a palindrome`) ;
    return true;
   }
    else
    {   
        console.log(` Given String - ${inputStr} is Not a palindrome`) ;
        return false;
    }

}
isPalindrome(inputStr);