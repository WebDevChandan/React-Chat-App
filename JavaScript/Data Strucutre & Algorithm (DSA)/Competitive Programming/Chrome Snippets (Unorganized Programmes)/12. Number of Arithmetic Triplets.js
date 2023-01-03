// Leetcode: #2367 (Number of Arithmetic Triplets)

/* Scenario:
I/P: nums = [0,1,4,6,7,10], diff = 3    |    nums = [4,5,6,7,8,9], diff = 2
O/P:                   2
*/

var arithmeticTriplets = function(nums, diff) {
    let triplets,
        hasMap = {},
        count=0;

    for (let i = 0; i < nums.length; i++) {
        hasMap[nums[i]] = true;
    }

    for (let j = 0; j < nums.length; j++) {
        let sum = nums[j] + diff,
            sub = nums[j] - diff;

        if(hasMap[sum] || hasMap[sub])
            count++;
    }

    if(count%2===0)
        triplets = count/2;

    return triplets;
  
};
arithmeticTriplets([4,5,6,7,8,9], 2);