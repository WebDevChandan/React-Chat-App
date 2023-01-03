//LeetCode: #1480 (Running Sum of 1d Array)

// var runningSum = function(nums) {
//     let sum=0,
//         arr = [];

//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i];
//         arr.push(sum);
//     }
//     return arr;
// };
// runningSum([3,1,2,10,1]);

//Another Method
var runningSum = function(nums) {
    let arr = [];

    for (let i = 0; i < nums.length; i++) {
        if(i===0)
            arr.push(nums[i]);
        else
            arr.push(nums[i]+arr[i-1]);
    }
    return arr;
};
runningSum([1,2,3,4]);