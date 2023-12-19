// Leetcode: #2529 (Maximum Count of Positive Integer and Negative Integer)

/*   Question:-
Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
Note that 0 is neither positive nor negative.


    Test Cases:-
Input: nums = [-2,-1,-1,1,2,3]
Output: 3

Input: nums = [-3,-2,-1,0,0,1,2]
Output: 3

Input: nums = [5,20,66,1314]
Output: 4

Input: nums = [0]
Output: 0

Input: nums = [0, 0]
Output: 0

Input: nums = [200]
Output: 1

Input: nums = [-2000]
Output: 1


    Approach_#1:- T.C: O(n) & S.C: O(1)
-- Declare & initialize two variable 'pos' & 'neg' with 0;

-- Loop over the 'nums' arr till its <length;
    - if(nums[i]<0) neg++;
    - if(nums[i]>0) pos++;

-- return Math.max(pos, neg); //Return the max out of pos or neg;

    Approach_#2:- 
    T.C at:- worst case: O(log(n)), best case: O(1), avg case: O(log(n)) 
    S.C at: O(1)
-- Declare & initialize two variable 'neg' & 'zero' with 0;

-- if(nums[0]>0) return nums.length;

-- if(nums[nums.length-1]<0) return nums.length;

-- if(nums[0]===0) return 0;

-- Loop over the 'nums' arr till its <length;
    - if(nums[i]===0)
        zero++;
        neg--;
    - if(nums[i]>0) break;
    - neg++;

-- return Math.max(neg, ((nums.length)-neg-zero))
*/

//CODE IMPLEMENTAION
//Approach_#1:
// var maximumCount = function(nums) {
//     let pos = 0,
//         neg = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i]<0) neg++;
//         if(nums[i]>0) pos++;
//     }

//     return Math.max(pos, neg);
// };


// Approach_#2:
var maximumCount = function(nums) {
    let zero = 0,
        neg = 0;

    // Edge Cases:
    // if all +ve;
    if(nums[0]>0) return nums.length;

    // if all +ve;
    if(nums[nums.length-1]<0) return nums.length;
    
    //if zero 
    if(nums[0]===0) return 0;
    
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]>0) break;
        
        if(nums[i]===0)
            zero++;    
        else neg++;
    }

    return Math.max(neg, (nums.length)-neg-zero);
};



