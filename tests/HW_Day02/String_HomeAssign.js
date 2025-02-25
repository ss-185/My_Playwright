// Learn how to manipulate strings and use looping statements in a programming language to solve practical problems.
// Example 1

let str = "Hello World";
let SplitStr = str.split(" ");
console.log(SplitStr);
let lastWord = `${SplitStr.slice(-1)}`;
console.log(`The last word is "${lastWord}" with length ${lastWord.length} `);


// Example 2
let s = " fly me to the moon ";
let strSplit = s.trim().split(" ");
console.log(strSplit);
let last_word = `${strSplit.slice(-1)}`;
console.log(`The last word is "${last_word}" with length ${last_word.length} `);


// Example 3
let str1 ="listen";
let str2 = "silent";
isAnagram(str1,str2);
function isAnagram(str1,str2)
{
    let str1trim = str1.trim().toLowerCase();
    let str2trim = str2.trim().toLowerCase();
   
    let str1sort = str1trim.split("").sort();
    console.log(str1sort);
    let str2sort = str2trim.split("").sort();
    console.log(str2sort);
   if(str1sort.toString()===str2sort.toString())   
        console.log(`The String ${str1} and ${str2} are Anagrams`);
   
    else
        console.log(`The String ${str1} and ${str2} not NOT Anagrams`);

}
