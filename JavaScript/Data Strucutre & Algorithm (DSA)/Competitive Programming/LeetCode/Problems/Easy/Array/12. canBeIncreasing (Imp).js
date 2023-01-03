//Leetcode: #1909 (Remove One Element to Make the Array Strictly Increasing)
                    
/* Approach:-
-- Check the nums in the array is strictly Increasing or Not
-- While Traversing the array, if Any num greater than next num, remove that elment and check if arr still strictly
  Increasing return true otherwise false.

-- Rules:
  No Element should be same or Reapeat
  We can remove only One Element
  All Elements should Increase from 0th Index till last

Scenario:- I/P: [1,2,6,3,4]  |  [1,2,6,5,3,4]   |  [3,2,1,4,5]  |   [2,1,3,4]  |  [110,210,100,500,700]  | [110,210,100,500,100,700]  |  [3,1,2,4,5]  |  [512,867,904,997,403]  | [1,2,3,4,10,5,5]                                
           O/P:     true             false              false           true            true                          false                  true              true                     false
Explain:
   1,2,6 Increasing
   Remove 6
   1,2,3,4 strictly Increasing
   Return true

   1,2,6 Increasing
   Remove 6
   1,2,5,3,4 strictly not Increasing
   Return false
*/

/* Logic:-
-- Loop over the array, Start with index number =1 till nums[].length-1;
   Num at index: i=1 & j=i+1;

-- SPECIAL CASE:
   If we got the 2nd Num < 1st Num --> Increment counter 
    OR 2nd Num === 1st Num return false

-- if(j<i)
   then check,
      Is j > (i-1)th num or i< (j+1th) num  AND check Is counter <1

   if Is j > (i-1)th num or i< (j+1th) num  But check Is counter =1
   Return false

-- Loop over the Array is Complete
   Return true
*/

/*Pseudo Code:
-- Initialize a counter = 0, 

-- Loop over the array nums[i], where 1<=i<nums.length-1
  
  //Special Case
  IF(nums[1]<nums[0])
  counter++
  ELSE IF(nums[0]===nums[1])
  return false

  j=i+1;
  
  IF(nums[j]<num[i]){
    IF((nums[j]>nums[i-1] || nums[i]<nums[j+1]) && counter<1)
      counter++;
    ELSE
      return false
  
  }

-- return true
*/


//CODE IMPLEMENTATION:-
var canBeIncreasing = function(nums) {
  let counter =0;

  for (let i=1; i < nums.length-1; i++) {
    let j=i+1;    
    
    //Special Case:
    if(nums[1]<nums[0])
      counter++;
    else if(nums[0]===nums[1] || nums[i]===nums[j])
      return false;


    if(nums[j]<nums[i]){
      if((nums[j]>nums[i-1] || nums[i]<nums[j+1]) && counter<1)
        counter++;
      else if(j===nums.length-1 && nums[j]<nums[i] && counter<1)
        return true;
      else
        return false;
    }
  }

  return true;
};
canBeIncreasing([1,2,3,4,10,5,5]);    //false