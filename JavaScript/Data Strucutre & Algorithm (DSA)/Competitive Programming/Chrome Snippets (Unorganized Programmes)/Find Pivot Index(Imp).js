// Leetcode: #724 (Find Pivot Index)

/* Given:-
1. num = an Integer Array 
2. return Pivot Index => Will be a +ve integer
3. Pivot Index: Sum of all num to its left === Sum of all num to its right.
*/

/* Test CAses:-
Input: nums = [1,7,3,6,5,6]             | Output: 3
Input: nums = [1,1,0,0,0,0,1]           | Output: 1 
Input: nums = [-1,-1,-1,-1,-1,0]        | Output: 2
Input: nums = [2,1,-1]                  | Output: 0
Input: nums = [-1,-1,0,-1,-1,0]         | Output: 2
Input: nums = [-1,-1,-1,-9,10,1,-13]    | Output: 4
Input: nums = [-1,-1,0,-1,-1,-1]        | Output: 3

*/

/* BruteForce Approach:-
1. [1,7,3,6,5,6], leftSum =0, rightSum=0;
2. We're going to assume each index as pivot idx.
3. start looping from idx==1. i=1 till nums.length-1
    start left looping from nums[i-1] till j>=0
        j--
    start right looping from nums[i+1] till k<nums.length
*/

/*Optimal Approach:-
1. Get the totalSum of the array
2. Start a loop till array length
    rightSum === totalSum - nums[i] - leftSum;
    At any index, when leftSum === rightSum
        return index
3. Otherwise return -1;
*/


var pivotIndex = function(nums) { //[1,7,3,6,5,6]
    
    
    let totalSum=0; //28
    
    
    for(let i=0; i<nums.length; i++){
        
        totalSum+=nums[i];
    }
    
    let leftSum =0; //11
    
    // 3<6
    for(let i=0; i<nums.length;i++){
        
        let rightSum = totalSum - nums[i] - leftSum;//28-6-11 == 11
        
        if(leftSum === rightSum) //11===11
            return i; //3
        
        leftSum +=nums[i]; //8+3
    }
    return -1;
}