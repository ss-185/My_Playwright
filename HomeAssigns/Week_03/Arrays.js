// Learn how to count the occurrences of a specific element in an array using JavaScript.

const nums = [2,4,5,2,1,2];
const k = 2;
let count =0;
function findOccurence(nums,k){
for(let i=0; i< nums.length ; i++)
{
    if(nums[i]===k)
        count++;
}
return count;
}
findOccurence(nums,k);
console.log(` Count of ${k} in nums array is ${count} `);