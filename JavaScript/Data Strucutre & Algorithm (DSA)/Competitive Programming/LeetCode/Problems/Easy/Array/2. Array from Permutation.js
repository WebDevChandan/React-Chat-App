//LeetCode: #1920 (Build Array from Permutation)

var buildArray = function(nums) {

    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        ans.push(nums[nums[i]]);
    }
    return ans;
};
buildArray([5,0,1,2,3,4]);