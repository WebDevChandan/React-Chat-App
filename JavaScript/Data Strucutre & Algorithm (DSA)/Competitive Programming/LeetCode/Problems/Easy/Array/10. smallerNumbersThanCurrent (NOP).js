// Leetcode: #1365 ( How Many Numbers Are Smaller Than the Current Number)

var smallerNumbersThanCurrent = function(nums) {
let arr = [];

    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if(nums[j]<nums[i])
                count +=1;
        }
        arr.push(count);
        
    }
    return arr;
};
smallerNumbersThanCurrent([7,7,7,7]);