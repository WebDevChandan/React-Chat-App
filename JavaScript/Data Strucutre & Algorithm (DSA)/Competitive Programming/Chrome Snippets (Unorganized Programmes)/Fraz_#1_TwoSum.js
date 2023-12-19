//================= ARRAY (Easy) ===================
/*
Q.1. Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 
    Given:-
1. nums: An array of Integers
2. target: An Integer
3. O/P: return indices of two numbers such that they add up to target.
    Note:
        Each input would have exactly one solution.
        You may not use the same element twice.
        Can return the answer in any order.
    
    
    Test Cases:-
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Input: nums = [3,2,4], target = 6
Output: [1,2]

Input: nums = [3,3], target = 6
Output: [0,1]

Input: nums = [-1,-2,-3,-4,-5], target = -8
Output: [2,4]

Input: nums = [3,2,3], target = 6
Output: [0,2]

Input: nums = [3,2,4], target = 6
Output: [1,2]


    Approach_#1: BruteForce [T.C: O(n^2) & S.C.: O(1)]
1. Start traversing over the 'nums' array from 0th idx till nums.length-1
    Start another nested loop from (i+1)th idx till nums.length
        if((nums[i]+nums[j]) === target)
            return [i, j];
            
2. return [];
*/

/*
//Code Implementation: 
var twoSum = function(nums, target) {// nums = [-1,-2,-3,-4,-5], target = -8
       
    //0<4
    for(let i=0; i<nums.length-1; i++){
        
        //1<5
         for(let j=i+1; j<nums.length; j++){
             
             // -1 + -2 === 6
               if((nums[i]+nums[j]) === target)
                   return [i, j]; //[0,1]
         }
    }
       return [];
};
*/


//  Approach_#2 [T.C: O(n) & S.C: O(1)]
/*
//Code Implementation: 
   var twoSum = function(nums, target) { //nums = [3,2,4], target = 6
       let hashMap = {},
           len = nums.length; //3
       
       //2<3
       for(let i =0; i<len; i++){
           
           //1 >= 0
           if(hashMap[nums[i]]>=0){
                return [hashMap[nums[i]], i]; //[1,2]
           }
           
           //6-2 =0
           hashMap[target - nums[i]] = i;
           
           /*
           hashMap{
                3:0,
                4:1,
                      
           }
           
           
       }
       return [];
    };
*/


// **Most Optimized Yet**
//  Approach_#3 [T.C: O(n) & S.C: O(1)] 
/*
//Code Implementation: 
var twoSum = function(nums, target) {
    let hashMap = {};
    for(let i =0; i<nums.length; i++){
        let diff = target - nums[i];
        if(hashMap[diff]==nums[i])
            return [nums.indexOf(diff), i];
        else
            hashMap[nums[i]]= diff;
    }
};
*/
