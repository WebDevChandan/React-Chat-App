//LeetCode: #1470 ( Shuffle the Array)

// var shuffle = function(nums, n) {
//     let i=0,
//         j=n,
//         arr=[];

//     for (let i = 0; i < n; i++) {
//         arr.push(nums[i]);
//         arr.push(nums[j]);
//         j++;
//     }
//     return arr;
// };
// shuffle([1,1,2,2],2);


//Optimize Method with O(1) space Complexity
var shuffle = function(nums, n) {

    let i = n - 1
    for (let j = nums.length - 1; j >= n; j--) {
        nums[j] <<= 10
        nums[j] |= nums[i]
        i--
    }
    
    i = 0
    for (let j = n; j < nums.length; j++) {
        const num1 = nums[j] & 1023
        const num2 = nums[j] >> 10
        nums[i] = num1
        nums[i + 1] = num2
        i += 2    
    }
    
    return nums
};
shuffle([2,5,1,3,4,7], 3);